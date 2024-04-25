
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";
import CountryError from "./pages/CountryError";

const App = () => {

  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path=":countryCode" element={<CountryPage />} />
            <Route path="*" element={<CountryError />} />
        </Route>
      </Routes>
  );
}

export default App
