import './App.css';
import { Route, Routes } from 'react-router-dom'
import Announcement from './components/Announcement/Announcement';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';



function App() {
 


  return (
    <div className="App">
      <Announcement text={<span>Purchase two eligible seasonal products to receive a Karst Eau de Parfum sample. <span 
        style={{
          marginLeft:"5px",
          textDecoration:"underline",
          cursor: "pointer"
        }}
      >Browse Formulations</span> </span>} banner={"banner-1"}/>
      <Announcement text={"Click and Collect is now available in Hong Kong. Enjoy complimentary shipping on all orders."} banner={"banner-2"}/>
      <Navbar />
       <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;
