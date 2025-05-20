
import './App.css'
import Hero from './components/home/Hero'
import Problem from './components/home/Problem'
import Reviews from './components/home/Reviews'

function App() {


  return (
    <main className='bg-[url("/hero-bg.svg")] bg-no-repeat bg-top min-h-svh '>
      <Hero/>
      <Problem/>
      <Reviews/>
    </main>
  )
}

export default App
