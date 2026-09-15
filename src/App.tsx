import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1 px-5">
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}

export default App
