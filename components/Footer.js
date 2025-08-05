import { useState } from "react";
import { useAuthContext } from "../pages/_app";
import AuthModal from "./AuthModal";

export default function Footer() {
  const { isAuthenticated, login, logout } = useAuthContext();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      setShowAuthModal(true);
    }
  };

  const handleLogin = async (password) => {
    const result = await login(password);
    if (result.success) {
      setShowAuthModal(false);
    }
    return result;
  };
  return (
    <footer className='text-sm w-3/4 mx-auto text-center py-12'>
      <a rel='license' href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
        <img
          alt='Creative Commons License'
          src='https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png'
          className='mx-auto'
          width='80'
          height='15'
        />
      </a>
      <br />
      This work is licensed under a{" "}
      <a rel='license' href='http://creativecommons.org/licenses/by-nc-sa/4.0/'>
        Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
        License
      </a>
      .
      <button
        onClick={handleAuthClick}
        className={`text-xs px-2 py-1 rounded ${
          isAuthenticated
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-gray-500 text-white hover:bg-gray-600"
        }`}
      >
        {isAuthenticated ? "Logout" : "Admin"}
      </button>
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
      />
    </footer>
  );
}
