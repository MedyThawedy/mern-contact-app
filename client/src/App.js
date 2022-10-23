import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from './pages/favorites/Favorites';
import CreateContact from './pages/createcontact/CreateContact';
import ContactDetails from './pages/contactdetails/ContactDetails';
import NoPage from './pages/nopage/NoPage';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/create" element={<CreateContact />} />
          <Route path="/details/:contactid" element={<ContactDetails />} />
          <Route path="*" element={<NoPage />} />
        </Routes> 
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
