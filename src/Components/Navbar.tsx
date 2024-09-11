import Wallet from "./Wallet-Button";

const Navbar = () => {
  return (
    <header className="w-full  bg-gradient-to-r from-black via-gray-900 to-black flex justify-between items-center p-6">
      <div></div> 
      <button className="bg-gray-700 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-600 transition">
        <Wallet/>
      </button>
    </header>
  );
};

export default Navbar;
