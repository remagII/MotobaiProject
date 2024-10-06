import "./App.css";
import Header from "./Components/Header/Header.jsx";
import Companies from "./Components/Pages/Customers/Accounts.jsx";
import WalkIn from "./Components/Pages/Customers/WalkIn";
import Products from "./Components/Pages/Product/Products";
import Inventory from "./Components/Pages/Inventory/Inventory";
import StockLogs from "./Components/Pages/Inventory/StockLogs.jsx";
import Orders from "./Components/Pages/Orders/Orders";
import OrderList from "./Components/Pages/Orders/OrderList";
import Login from "./Components/Pages/Authentication/Login.jsx";
import Register from "./Components/Pages/Authentication/Register.jsx";
import Suppliers from "./Components/Pages/Suppliers/Suppliers";
import NotFound from "./Components/Pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import Container from "./Components/Container.jsx";

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
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orderList" element={<OrderList />} />
          <Route path="/walkIn" element={<WalkIn />} />
          <Route path="/stockinlogs" element={<StockLogs />} />
          <Route path="/" element={<Companies />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
