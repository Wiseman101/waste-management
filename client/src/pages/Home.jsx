import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Optional: create for custom styles

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to WasteWise</h1>
      <p>Your smart waste management companion.</p>
      <div className="home-links">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Register</Link>
      </div>
    </div>
  );
};

export default Home;
