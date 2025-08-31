"use client";

import Link from "next/link";

export default function RelatedBlogs({ blogs }) {
  return (
    <aside className="hidden lg:block w-64 ml-8 sticky top-20">
      <h3 className="text-xl font-bold mb-4 text-orange-500">Related Blogs</h3>
      <ul className="space-y-3">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link
              href={`/blogs/${blog.slug}`}
              className="block text-gray-700 hover:text-blue-600 transition"
            >
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
