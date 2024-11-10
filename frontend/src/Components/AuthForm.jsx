import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import Logo from "../assets/Logo.png";
import "./pages.css";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/accounts");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="fixed w-screen h-screen left-0 top-0 z-10 backdrop-blur-sm bg-black bg-opacity-60 ">
        <div
          className={`absolute inset-0 w-fit h-fit m-auto bg-mainColor rounded-lg z-10
            `}
        >
          <div className={`bg-mainColor w-1/2 rounded-l-lg`}>
            <img
              className="max-w-16 rounded-l-xl"
              src={Logo}
              alt="Motobai-Logo"
            />
          </div>
          <form onSubmit={handleSubmit} className="min-w-[20vw]">
            <div
              className={`bg-gray-100 py-10 px-8 h-[40vh] rounded-b-lg flex flex-col gap-4`}
            >
              <h1 className="font-bold text-2xl">{name}</h1>
              <input
                className="text-lg p-2 min-w-[450px]"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <input
                className="text-lg p-2 min-w-[450px]"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <div className="flex justify-center mt-12">
                <button
                  className={`shadow-md bg-white border-2 border-red-700 rounded px-6 py-2 hover:bg-red-700 hover:text-white transition-all duration-100 items-center w-fit text-xl font-semibold`}
                  type="submit"
                >
                  {name}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
