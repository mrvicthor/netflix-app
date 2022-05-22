import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import ProfileRows from "../components/ProfileRows";

const Profile = () => {
  const user = useSelector(selectUser);
  const isProfileScreen = true;
  return (
    <div>
      <Navbar toggle={isProfileScreen} />
      <div className=" w-[90%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] md:w-[800px] overflow-hidden px-2 pb-2">
        <h1 className="text-white font-medium text-lg mb-2">Edit Profile</h1>
        <div className="flex gap-4">
          <img src="https://rb.gy/g1pwyx" alt="avatar" className="h-[100px]" />
          <div className="w-full">
            <h2 className="text-white px-2 py-2 bg-gray-400 w-[100%]">
              {user.email}
            </h2>
            <p className="text-white my-2 text-lg">
              Plans (Current Plan: Premium)
            </p>
            <hr />
            <p className="text-slate-200 my-5">Renewal date: 04/03/2022</p>

            <div className=" px-5 space-y-10">
              <ProfileRows
                color={"bg-red-600"}
                title="Netflix Standard"
                message="Subscribe"
                quality="1080p"
              />
              <ProfileRows
                color={"bg-red-600"}
                title="Netflix Basic"
                message="Subscribe"
                quality="480p"
              />
              <ProfileRows
                color={"bg-gray-400"}
                title="Netflix Premium"
                message="Current Package"
                quality="4K+HDR"
              />
            </div>
            <div className="mt-10 w-full">
              <button
                onClick={() => signOut(auth)}
                className="text-white font-semibold px-5 py-3 bg-red-600 border-none rounded w-full hover:opacity-60 "
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
