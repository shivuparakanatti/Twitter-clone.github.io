'use client';
import './App.css';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import PaginatedItems from './components/Paginate';
function App() {
  return (
    <div className='bg-white '>

      <NavbarComponent/>
     <PaginatedItems itemsPerPage={5}/>
    </div>
    
  

      
     
   
  );
}

export default App;
