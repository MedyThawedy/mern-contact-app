import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorites from './pages/createcontact/CreateContact';
import CreateContact from './pages/createcontact/CreateContact';
import ContactDetails from './components/contactdetails/ContactDetails';
import NoPage from './pages/nopage/NoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>

            <Route path="favorites" element={<Favorites />} />
            <Route path="create" element={<CreateContact />} />
            <Route path="/details/:contactid" element={<ContactDetails />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
