import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Header from './Components/Navbar/Header';
import Dashboard from './Components/DashBoard/Dashboard';
import CreateAds from './Components/CreateAdds/CreateAds';
import CreateAdForm from './Components/CreateAdds/CreateAdForm';
import CreateMediaAdForm from './Components/CreateAdds/CreateMediaAdForm';


function App() {
  return (
  <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path='/create-ads' element={<CreateAds/>}></Route>
        <Route path='/TextAd' element={<CreateAdForm/>}></Route>
        <Route path='/MediaAd' element={<CreateMediaAdForm/>}></Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
