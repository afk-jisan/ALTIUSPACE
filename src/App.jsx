import { Outlet, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen">
      
      
      <main>
        {/* Outlet renders the matched child route component */}
        <Outlet />
      </main>
    </div>
  );
}

export default App;


/* remove the bg-gray-50 later*/