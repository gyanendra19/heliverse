import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Ratings from "./components/Ratings"
import Support from "./components/Support"

function App() {

  return (
    <>
      <section className="w-full h-full box-border relative">
        <div className="w-full h-full bg-black opacity-35 absolute"></div>
        <Header />
        <Hero />
        <Ratings />
        <Support />
        <Features />
        <Footer />
      </section>
    </>

  )
}

export default App
