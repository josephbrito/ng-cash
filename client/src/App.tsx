import { GlobalStyle } from "./global/style_global";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Register from "./components/Register";
import Login from "./components/Login";
import SendCash from "./components/SendCash";
import Table from "./components/Table";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/transfer" element={<SendCash />} />
        <Route path="/details" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
