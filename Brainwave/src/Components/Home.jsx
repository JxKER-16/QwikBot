import Footer from "./Footer"
import Hero from ".//Hero"
import Navbar from "./Navbar"
import Login from "./Login/Login"



function App() {
  return (
    <>
      <div className="body">
        
      <div className="p-4 h-32 border-none rounded-b-2xl sticky w-full">
        <Navbar />
      </div>
      <div>
        <Hero/>
      </div>
      <div>
        <Footer/>
      </div>
      <div>
        <Login/>
      </div>
      </div>

    </>
  )
}

export default App