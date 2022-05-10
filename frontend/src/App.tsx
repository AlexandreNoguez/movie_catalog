import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Form from "./pages/Form";
import Listing from "./pages/Listing";

export default function App() {
  return (
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Listing />} />
            <Route path="/form" >
              <Route path=":movieId" element={<Form />} /> 
            </Route>
          </Routes>
      </BrowserRouter>
    );
}


