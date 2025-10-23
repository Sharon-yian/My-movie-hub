import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function Navbar() {
  const handleLogout = () => {
    signOut(auth).then(() => {
      window.location.href = '/signin';
    });
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">My Movie Hub</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/profile" className="hover:text-gray-300">Profile</Link>
          {auth.currentUser ? (
            <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded">Logout</button>
          ) : (
            <>
              <Link to="/signin" className="bg-blue-600 px-4 py-2 rounded">Sign In</Link>
              <Link to="/signup" className="bg-green-600 px-4 py-2 rounded">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;