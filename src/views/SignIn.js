import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase";

const SignIn = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((cred) => {
        console.log("user created:", cred.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((cred) => console.log("Sign in successful"))
      .catch((err) => console.log(err.message));
  };
  return (
    <div
      style={{ background: "rgba(0,0,0,.4)" }}
      className="mx-auto w-[90%] px-8 py-8 md:max-w-md"
    >
      <h1 className="text-white font-bold text-lg mb-4 md:text-2xl lg:text-3xl ">
        Sign In
      </h1>
      <form className="flex flex-col space-y-3">
        <input
          ref={emailRef}
          placeholder="Email..."
          className="py-2 px-4 rounded outline-none"
        />
        <input
          ref={passwordRef}
          type="password"
          className="py-2 px-4 rounded outline-none"
        />

        <button
          type="submit"
          onClick={signIn}
          style={{ marginBlock: "30px" }}
          className="text-white bg-red-600 rounded py-2  font-bold md:text-lg"
        >
          Sign In
        </button>
      </form>
      <p className="text-[#B4B4B4]">
        New to Netflix?{" "}
        <Link to="/signUp" onClick={signUp} className="text-white">
          Sign up now
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
