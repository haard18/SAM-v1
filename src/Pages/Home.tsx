import React from 'react';
import { FaLock, FaCheckCircle, FaEye } from 'react-icons/fa'; // Import icons for your cards
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import CustomCard from '../Components/Cards'; // Import the CustomCard component
import Wallet from '../Components/Wallet-Button'; // Import Wallet Button
import { useActiveAddress } from 'arweave-wallet-kit'


const Home: React.FC = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleJoinWaitlist = () => {
    navigate('/wait'); // Navigate to /wait when the button is clicked
  };
  
  const active = useActiveAddress(); // Call the useActiveAddress hook outside of the callback function
  
  // useEffect(() => {
  //   const walletStrategy = localStorage.getItem('wallet_kit_strategy_id');
  //   if (walletStrategy) {
  //     navigate('/');
  //   } else {
  //     console.log(active); // Use the active address here
  //   }
  // });
  const handleOnchainClick=()=>{
    const walletStrategy = localStorage.getItem('wallet_kit_strategy_id');
    if (walletStrategy) {
      navigate('/onchain');
    } else {
      console.log(active); // Use the active address
    }
  }
  return (
    <div className="bg-[#0E0E0E] app-background  h-screen w-full flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="flex flex-col justify-center  items-center text-center mb-16 mt-16">
        <h1
          className="text-white gradient-text text-4xl md:text-8xl font-light tracking-widest"
          style={{ fontFamily: "'Anton SC', sans-serif" }}
        >
          <span>SENTIO</span>
        </h1>
        <p
          className="text-white text-2xl md:text-3xl font-extralight mt-2 md:mt-4"
          style={{ fontFamily: "'Roboto'" }}
        >
          You Write, We{' '}
          <span className="inline-block px-2 py-1 border font-extrabold border-gray-500 rounded-lg">
            Monitor
          </span>
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-3">
          <button className="px-6 py-3 bg-white rounded-xl font-bold">Offchain</button>
          <button onClick={handleOnchainClick} className="px-6 py-3 bg-white rounded-xl font-bold">Onchain</button>
        </div>
        <div className="mt-4">
          <button className="px-10 py-3 bg-white rounded-xl font-bold text-lg" onClick={handleJoinWaitlist}>
            Join Waitlist
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center">
        
        <CustomCard
          glowColor='green'
          icon={FaLock}
          title="SECURITY"
          description="Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua."
        />
        {/* Card 2 */}
        <CustomCard
          glowColor='yellow'
          icon={FaCheckCircle}
          title="AUDITING"
          description="Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat."
        />
        {/* Card 3 */}
        <CustomCard
          glowColor='red'
          icon={FaEye}
          title="MONITORING"
          description="Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua."
        />
      </div>

      {/* Wallet Button in the top right corner */}
      <div className="absolute top-4 right-4 ">
        <Wallet />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
