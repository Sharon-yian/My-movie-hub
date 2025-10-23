import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './pages/Profile';
import FavoritesPages from './components/FavoritesPages';
import TrendingList from './components/TrendingList';
import ForgetPassword from './components/ForgetPassword';
import SearchBar from './components/SearchBar';
import MovieDetails from './components/MovieDetails';
import { AuthProvider } from './components/Auth';
import { fetchMovies } from './tmdb'; // Import tmdb utility

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-white">
          <Navbar />
          <SearchBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorites" element={<FavoritesPages />} />
            <Route path="/trending" element={<TrendingList />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/search" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;