import { auth } from '../firebase';

function Profile() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg">
      <h2 className="text-2xl mb-4">Profile</h2>
      {auth.currentUser ? (
        <p>Welcome, {auth.currentUser.email}</p>
      ) : (
        <p>Please sign in to view your profile.</p>
      )}
    </div>
  );
}

export default Profile;