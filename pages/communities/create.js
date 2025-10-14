import { useState, useRef } from 'react';
import { useSession, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function CreateCommunity() {
  const { data: session } = useSession();
  const router = useRouter();
  const fileInputRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    rules: [''],
    backgroundImage: null
  });
  
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  const handleImageUpload = async (file) => {
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      setError('Please select a valid image file (JPEG, PNG, GIF, WebP)');
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5MB');
      return;
    }

    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setFormData(prev => ({
          ...prev,
          backgroundImage: {
            url: data.imageUrl,
            publicId: data.publicId
          }
        }));
        setPreviewUrl(data.imageUrl);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to upload image');
      }
    } catch (error) {
      setError('Error uploading image');
      console.error('Upload error:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeImage = () => {
    setFormData(prev => ({
      ...prev,
      backgroundImage: null
    }));
    setPreviewUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!session) {
      setError('Please sign in to create a community');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/communities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description,
          rules: formData.rules.filter(rule => rule.trim() !== ''),
          backgroundImage: formData.backgroundImage
        }),
      });

      if (response.ok) {
        const data = await response.json();
        router.push(`/communities/${data.data._id}`);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to create community');
      }
    } catch (error) {
      setError('Error creating community');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const addRule = () => {
    setFormData(prev => ({
      ...prev,
      rules: [...prev.rules, '']
    }));
  };

  const updateRule = (index, value) => {
    setFormData(prev => ({
      ...prev,
      rules: prev.rules.map((rule, i) => i === index ? value : rule)
    }));
  };

  const removeRule = (index) => {
    setFormData(prev => ({
      ...prev,
      rules: prev.rules.filter((_, i) => i !== index)
    }));
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Sign In Required</h1>
          <p className="text-gray-600">Please sign in to create a community.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Create Community | CommunityApp</title>
      </Head>

      {/* Background with overlay */}
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed py-8"
        style={{
          backgroundImage: previewUrl 
            ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${previewUrl})`
            : 'linear-gradient(rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.1))',
          backgroundColor: '#f9fafb'
        }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-6 border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Create a Community</h1>
            
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-red-800">{error}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Background Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Community Background Image (Optional)
                </label>
                
                {previewUrl ? (
                  <div className="relative">
                    <img
                      src={previewUrl}
                      alt="Background preview"
                      className="w-full h-48 object-cover rounded-lg border-2 border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div className="mt-2">
                      <p className="text-sm font-medium text-gray-900">
                        {uploading ? 'Uploading...' : 'Upload background image'}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Drag and drop or click to browse
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                    </div>
                  </div>
                )}
                {uploading && (
                  <div className="mt-2 text-sm text-blue-600">Uploading image...</div>
                )}
              </div>

              {/* Community Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Community Name *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                    r/
                  </span>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-r-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter community name"
                    maxLength={50}
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Community names including capitalization cannot be changed.
                </p>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe your community's purpose and topics..."
                  maxLength={500}
                />
                <p className="mt-1 text-sm text-gray-500">
                  {formData.description.length}/500 characters
                </p>
              </div>

              {/* Rules */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Community Rules (Optional)
                </label>
                <div className="space-y-3">
                  {formData.rules.map((rule, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={rule}
                        onChange={(e) => updateRule(index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder={`Rule ${index + 1}`}
                        maxLength={200}
                      />
                      {formData.rules.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeRule(index)}
                          className="px-3 py-2 text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={addRule}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  + Add Rule
                </button>
                <p className="mt-1 text-sm text-gray-500">
                  Establish rules to help members understand what is acceptable in your community.
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end space-x-3 pt-6 border-t">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading || uploading}
                  className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {loading ? 'Creating...' : 'Create Community'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}