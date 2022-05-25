import { Link } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);
  const signUp = handleSubmit((data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((cred) => {
        console.log("user created:", cred.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  const signIn = handleSubmit((data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((cred) => console.log("Sign in successful"))
      .catch((err) => console.log(err.message));
  });

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
          {...register("email", {
            required: "Email is required...",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email, please enter a valid email",
            },
          })}
          placeholder="Email..."
          className="py-2 px-4 rounded outline-none"
        />
        {errors.email && (
          <p className="text-red-700">{errors.email?.message}</p>
        )}
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          className="py-2 px-4 rounded outline-none"
        />
        {errors.password && (
          <p className="text-red-700">{errors.password?.message}</p>
        )}
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

export default SignUp;
