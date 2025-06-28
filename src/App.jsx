import { Outlet, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'



function App() {
  const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time)
    }
  
    const rafId = requestAnimationFrame(update)
  
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div className="min-h-screen">
      <ReactLenis root options={{ autoRaf: true }} ref={lenisRef} />
      
      
      <main>
        {/* Outlet renders the matched child route component */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;


/* remove the bg-gray-50 later*/