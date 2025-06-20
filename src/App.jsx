import { Outlet, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen">
      <div className='bg-transparent py-5 sm:px-8 md:px-30 lgc:px-20 xl:px-50 sticky top-0 z-100 px-5'>
        <Navbar/> 
      </div>
      
      <main>
        {/* Outlet renders the matched child route component */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;


/* remove the bg-gray-50 later*/