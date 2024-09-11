import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import BackButton from '../Components/BackButton';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';  // Import Toastify components
import 'react-toastify/dist/ReactToastify.css';          // Import Toastify CSS
import "../styles/Waitlist.css";
// import {BACKEND_URL} from "../../env"
const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [hasUpdates, setHasUpdates] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://sam-server.azurewebsites.net/api/waitlist", { email, name });
      console.log(response.data);
      // Show success toast notification
      toast.success('You have successfully joined the waitlist!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setShowConfirmation(true);
    } catch {
      // Show error toast notification
      toast.error('An error occurred. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleClose = () => {
    setShowConfirmation(false);
    setEmail("");
    setName("");
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setHasUpdates(false);
  };

  const updates = [
    { date: "05/09/2024", message: "Opened Waitlist for Masses" },
    { date: "28/08/2024", message: "LaunchPad Kicks Off" },
    { date: "26/07/2024", message: "Integration with BetterIDEa" },
    { date: "08/07/2024", message: "HackerHouse Presentation" },
    { date: "06/07/2024", message: "Idea Forging" },
    // { date: "23/01/2023", message: "We finalized the design system for the upcoming launch." },
  ];

  return (
    <div className="bg-[#0E0E0E] app-background h-screen w-full flex flex-col justify-center items-center relative">
      <BackButton mode='dark' />

      {/* Toast Container */}
      <ToastContainer />

      <button onClick={toggleNotifications} className="absolute top-4 right-4 text-white p-2 rounded-full ">
        <FontAwesomeIcon icon={faBell} className="text-2xl" />
        {hasUpdates && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-3 h-3 text-xs font-bold leading-none text-white bg-red-600 rounded-full"></span>
        )}
      </button>

      {showNotifications && (
        <div className="notifications bg-gray-900 text-white p-4 rounded-lg shadow-lg fixed top-16 right-4 w-80 h-auto z-50">
          <h2 className="text-lg font-semibold mb-2">Updates</h2>
          <div className="updates-list">
            {updates.map((update, index) => (
              <div key={index} className="update-item mb-4">
                <p className="text-gray-400 text-sm">{update.date}</p>
                <p className="text-white">{update.message}</p>
              </div>
            ))}
          </div>
          <button onClick={toggleNotifications} className="text-sm text-right text-gray-400 mt-4">
            Close
          </button>
        </div>
      )}

      {!showConfirmation ? (
        <div className="text-center">
          <h1 className="gradient-text text-5xl md:text-9xl font-light text-center tracking-widest mb-4">
            <span>SENTIO</span>
          </h1>
          <h1 className="text-white text-4xl md:text-8xl font-light tracking-widest mb-4" style={{ fontFamily: "'Anton SC',sans-serif" }}>
            JOIN OUR WAITLIST
          </h1>
          <p className="text-white text-xl md:text-3xl font-extralight mb-8" style={{ fontFamily: "'Roboto'" }}>
            Be the first to know when we launch!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="px-4 py-2 rounded-lg text-black text-lg mb-4 w-72 md:w-96"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-black text-lg mb-4 w-72 md:w-96"
              required
            />
            <button type="submit" className="px-6 py-3 bg-white rounded-xl font-bold w-40">
              Join Waitlist
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-black bg-opacity-80 flex justify-center items-center fixed inset-0 z-50">
          <div className="bg-[#1a1a1a] p-8 rounded-lg text-center relative shadow-lg w-80 md:w-96">
            <button className="absolute top-2 right-2 text-white text-xl" onClick={handleClose}>
              &times;
            </button>
            <div className="flex justify-center items-center mb-6">
              <div className="checkmark">
                <div className="checkmark_stem"></div>
                <div className="checkmark_kick"></div>
              </div>
            </div>
            <h2 className="text-white text-2xl font-semibold mb-2">
              We've added you to our waiting list!
            </h2>
            <p className="text-gray-400 mb-6">We'll let you know when we're ready to launch.</p>
            <div className="bg-[#262626] p-4 rounded-md text-left">
              <p className="text-white text-sm mb-2">
                <span className="font-semibold">Name:</span> {name}
              </p>
              <p className="text-white text-sm">
                <span className="font-semibold">Email:</span> {email}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Waitlist;
