// components/AuthModal.js
import { useState } from "react";

export default function AuthModal({ isOpen, onClose, onLogin }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await onLogin(password);

    if (result.success) {
      setPassword("");
      onClose();
    } else {
      setError(result.error || "Invalid password");
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg w-80 max-w-sm mx-4'>
        <div className='flex justify-between items-center mb-4'>
          <h3 className='text-lg font-semibold'>Admin Login</h3>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700 text-xl'
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-sm font-medium mb-2'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-3 border border-gray-300 rounded text-black text-lg'
              placeholder='Enter admin password'
              autoFocus
            />
          </div>

          {error && <div className='text-red-500 text-sm mb-4'>{error}</div>}

          <button
            type='submit'
            disabled={!password || loading}
            className='w-full bg-purple-500 text-white font-bold py-3 px-4 rounded hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
