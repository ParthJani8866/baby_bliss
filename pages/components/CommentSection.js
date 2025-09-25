"use client";

import { useState, useEffect } from "react";

export default function CommentSection({ slug }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const res = await fetch(`/api/comments/${slug}`);
    const data = await res.json();
    setComments(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !comment) return;

    const res = await fetch(`/api/comments/${slug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, comment }),
    });

    if (res.ok) {
      setComment("");
      fetchComments();
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="mt-12 space-y-6">
      <h2 className="text-lg font-semibold mb-4">Comments</h2>

      {/* Add Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-3 border rounded-md p-4 bg-gray-50">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md focus:ring-1 focus:ring-gray-400 focus:outline-none"
        />
        <textarea
          placeholder="Add your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          className="w-full p-2 border rounded-md focus:ring-1 focus:ring-gray-400 focus:outline-none resize-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Comment
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 && (
          <p className="text-gray-500">No comments yet. Be the first!</p>
        )}

        {comments.map((c) => (
          <div
            key={c._id}
            className="border border-gray-200 rounded-md p-4 bg-white shadow-sm"
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center space-x-2">
                {/* Optional avatar */}
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-white">
                  {c.name.charAt(0).toUpperCase()}
                </div>
                <p className="font-semibold text-gray-800">{c.name}</p>
              </div>
              <p className="text-xs text-gray-400">
                {new Date(c.createdAt).toLocaleString()}
              </p>
            </div>
            <p className="text-gray-700 mb-2">{c.comment}</p>
            {/* Reactions placeholder */}
            <div className="flex items-center space-x-3 text-gray-500 text-sm">
              <button className="hover:text-blue-500 transition">👍 0</button>
              <button className="hover:text-blue-500 transition">💬 Reply</button>
            </div>

            {/* Replies container (nested) */}
            {c.replies && c.replies.length > 0 && (
              <div className="mt-3 ml-10 space-y-2">
                {c.replies.map((r) => (
                  <div
                    key={r._id}
                    className="border border-gray-100 rounded-md p-2 bg-gray-50"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <p className="font-semibold text-gray-800">{r.name}</p>
                      <p className="text-xs text-gray-400">
                        {new Date(r.createdAt).toLocaleString()}
                      </p>
                    </div>
                    <p className="text-gray-700">{r.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
