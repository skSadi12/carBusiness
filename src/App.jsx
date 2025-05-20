
import './App.css'
import Hero from './components/home/Hero'
import Partners from './components/home/Partners'
import Problem from './components/home/Problem'
import Reviews from './components/home/Reviews'

function App() {


  return (
    <main className='bg-[url("/hero-bg.svg")] bg-no-repeat bg-top min-h-svh '>
      <Hero/>
      <Problem/>
      <Reviews/>
      <Partners/>
    </main>
  )
}

export default App
