import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <div className="text-center mt-20 px-4">
        <h1 className="text-4xl font-bold text-white">
          Welcome to the Sign Language App
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          This app translates hand gestures into meaningful sentences using your camera.
        </p>

        <Link to="/detect">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
            Get Started
          </button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-24 px-6">
        
        <img
          src="/assets/image.png"  // Replace with your actual image path
          alt="Example of hand gesture"
          className="w-1/3 md:w-1/4 rounded-lg shadow-lg"
        />

       
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-2xl font-semibold text-white mb-4">How It Works</h2>
          <p className="text-gray-300 mb-2">
            ➤ Turn on your camera and show a hand gesture.
          </p>
          <p className="text-gray-300 mb-2">
            ➤ The app detects your gesture using AI.
          </p>
          <p className="text-gray-300">
            ➤ It converts the gesture into a sentence in real time.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
