import { useRouter } from "next/router";
import Link from "next/link";
import Icon from "./Icon";
import { useState } from "react";
import { useAuthContext } from "../pages/_app";
import AuthModal from "./AuthModal";

export default function Header({ title }) {
  const router = useRouter();
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
    <>
      <div className='flex flex-row items-center justify-between'>
        <div
          className='font-extrabold uppercase flex items-center cursor-pointer text-sm'
          onClick={() => router.back()}
        >
          <Icon icon='ArrowLeftIcon' />
          Back
        </div>

        <header className='py-4'>
          <h1 className='text-center'>
            <Link href='/'>Hello Chicago</Link>
          </h1>
          <h2 className='text-center'>{title}</h2>
        </header>

        <div className='flex items-center gap-2'>
          {/* Admin Auth Button */}
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

          <div className='font-extrabold uppercase flex items-center text-sm'>
            <Link href='/'>Home</Link>
            <Link href='/'>
              <Icon icon='HomeIcon' />
            </Link>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
      />
    </>
  );
}
