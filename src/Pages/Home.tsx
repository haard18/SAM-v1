import { Lock, Monitor, Search } from 'lucide-react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ".././assets/gradient.svg"
import "../styles/Home.css"
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white min-h-screen flex flex-col items-center">
      <Navbar />

      <main className="flex flex-col items-center text-center px-4 md:px-8 flex-grow w-full max-w-6xl mx-auto">
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-wider mb-4">
          <span className="bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text">SAM</span>
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8">
          You Write, We <span className="bg-white text-black px-2 py-1">Monitor</span>
        </h2>

        <div className="flex space-x-4 mb-12">
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition font-semibold">
            Off-Chain
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition font-semibold">
            On-Chain
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            { title: 'SECURITY', icon: Lock, color: 'teal' },
            { title: 'AUDITING', icon: Monitor, color: 'yellow' },
            { title: 'MONITORING', icon: Search, color: 'purple' },
          ].map((card, index) => (
            <div key={index} className="relative bg-gray-800 p-6 rounded-xl shadow-lg text-left hover:scale-105 transition transform">
              <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 bg-${card.color}-400 w-12 h-1 rounded-full`}></div>
              <div className="flex justify-center mb-4">
                <card.icon className="w-12 h-12 text-gray-300" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-400">
                <span className="font-semibold">Sample Text</span> Dolor Sit Amet, Consectetur Adipiscing Elit, 
                Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, 
                Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.
              </p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}