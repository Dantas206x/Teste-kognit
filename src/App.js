import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Paginas/Paginalog';
import MainPage from './Paginas/PaginaInit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/home" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;