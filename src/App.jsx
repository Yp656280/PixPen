import { useEffect, useState } from "react";
import "./App.css";
import conf from "./conf/conf";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => {
        console.log("no user");
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap   content-between bg-gray-400">
      <Header />
      <main className="flex flex-col content-center w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
