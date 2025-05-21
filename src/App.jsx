
import './App.css'
import Ai from './components/home/Ai'
import Hero from './components/home/Hero'
import Management from './components/home/Management'
import Partners from './components/home/Partners'
import Problem from './components/home/Problem'
import Questions from './components/home/Questions'
import Reviews from './components/home/Reviews'
import Footer from './components/sheard/Footer'

function App() {


  return (
    <main className='bg-[url("/hero-bg.svg")] bg-no-repeat bg-top min-h-svh '>
      <Hero/>
      <Problem/>
      <Reviews/>
      <Partners/>
      <Questions/>
      <Management/>
      <Ai/>
      <Footer/>
    </main>
  )
}

export default App
