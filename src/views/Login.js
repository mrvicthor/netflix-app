import { useState } from "react";
import SignIn from "./SignUp";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div
      style={{
        backgroundImage: `url(
          "https://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg"
        )`,
        backgroundPosition: "center",
      }}
      className="relative h-full w-screen bg-no-repeat bg-cover"
    >
      <img
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="login"
        className="absolute top-5 left-0 h-8 w-20 pl-2 md:h-10 lg:h-12 lg:w-28 lg:left-3"
      />
      <button
        onClick={() => setSignIn(true)}
        className="text-white absolute rounded right-2 top-5 py-2.5 px-5 font-bold bg-red-600 border-none cursor-pointer lg:right-8"
      >
        Sign In
      </button>
      <div
        style={{
          background: "rgba(0,0,0,.4)",
          backgroundImage: `linear-gradient(to top,
            rgba(0,0,0,0.8) 0,
            rgba(0,0,0,0)60%,
            rgba(0,0,0,0.8) 100%`,
        }}
        className="w-full h-screen z-1"
      />
      <div className="group absolute w-[90%] top-[50%] left-[50%] z-10 -translate-x-[50%] -translate-y-[50%] md:w-[80%]  ">
        {signIn ? (
          <SignIn />
        ) : (
          <>
            <h1 className="text-white text-center font-bold text-xl md:text-4xl">
              Unlimited films, Tv programmes and more.
            </h1>

            <p className="text-white text-center mt-2 text-lg md:text-xl md:text-center">
              Watch anywhere. Cancel at any time.
            </p>
            <p className="text-white text-center mt-2 text-sm md:text-center md:text-lg">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="">
              <form className="flex flex-col gap-2 justify-center mt-1 md:flex-row md:gap-0 lg:justify-center">
                <input
                  className="py-1 px-3 outline-none md:w-[75%] lg:w-[45%] lg:py-2"
                  placeholder="Email address..."
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="text-white bg-red-600 uppercase py-1 cursor-pointer bg-none font-semibold hover:bg-red-400 hover:text-slate-300 md:px-3"
                >
                  get started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
