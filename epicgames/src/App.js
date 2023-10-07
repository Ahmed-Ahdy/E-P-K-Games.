import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import Users from './component/Users';
import EditUser from './component/EditUser';
import DetailsUser from './component/DetailsUser';
import AddNewUser from './component/AddNewUser';
import RemoveUser from './component/RemoveUser';
import DownloadApp from './component/DownloadApp';
import Support from './component/Support';
import BuyNow from './component/BuyNow';
import Home from './component/Home';
import RedDeadRedemption from './component/RedDeadRedemption';
import Fifa from './component/Fifa';
import Gta from './component/Gta';
import Creed from './component/Creed';
import Cry from './component/Cry';
import DaysGone from './component/DaysGone';
import Rainbow from './component/Rainbow';
import Hit from './component/Hitman';
import Cyber from './component/Cyber';
import Tomb from './component/Tomb';
import Hunter from './component/Hunter';
import Civil from './component/Civil';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>


          <Route path='/component/Home' element={<Home />} />
          <Route path='/component/Users' element={<Users />} />
          <Route path='/component/EditUser/:id' element={<EditUser />} />
          <Route path='/component/AddNewUser' element={<AddNewUser />} />
          <Route path='/component/RemoveUser/:id' element={<RemoveUser />} />
          <Route path='/component/DetailsUser/:id' element={<DetailsUser />} />
          <Route path='/component/DownloadApp' element={<DownloadApp />} />
          <Route path='/component/Support' element={<Support />} />
          <Route path='/component/buynow' element={<BuyNow />} />
          <Route path='/component/RedDeadRedemption' element={<RedDeadRedemption />} />
          <Route path='/component/Fifa' element={<Fifa />} />
          <Route path='/component/Gta' element={<Gta />} />
          <Route path='/component/Creed' element={<Creed />} />
          <Route path='/component/Cry' element={<Cry />} />
          <Route path='/component/DaysGone' element={<DaysGone />} />
          <Route path='/component/Rainbow' element={<Rainbow />} />
          <Route path='/component/Hitman' element={<Hit />} />
          <Route path='/component/Cyber' element={<Cyber />} />
          <Route path='/component/Tomb' element={<Tomb />} />
          <Route path='/component/Hunter' element={<Hunter />} />
          <Route path='/component/Civil' element={<Civil />} />



        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
