import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Companies from "./Components/Pages/Customers/Companies";
import WalkIn from "./Components/Pages/Customers/WalkIn";
import Products from "./Components/Pages/Product/Products";
import Inventory from "./Components/Pages/Inventory/Inventory";
import Orders from "./Components/Pages/Orders";
import OrderList from "./Components/Pages/OrderList";
import Login from "./Components/Pages/Login.jsx";
import Register from "./Components/Pages/Register.jsx";

import { Route, Routes } from "react-router-dom";
import Container from "./Components/Pages/Container";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/products" element={<Products />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orderList" element={<OrderList />} />
          <Route path="/walkIn" element={<WalkIn />} />

          {/* 
          LACKING PAGES:
          - LOGIN 
          - REGISTER
          - NOT FOUND
          - HOME PAGE
          - ABOUT PAGE(optional)
          */}
        </Routes>
      </Container>
    </>
  );
}

export default App;
