import { useState, useEffect } from "react";
import Home from "./views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Profile from "./views/Profile";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logOut, selectUser } from "./features/userSlice";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="min-h-screen overflow-hidden">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
