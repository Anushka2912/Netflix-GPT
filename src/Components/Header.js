import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log({user});

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(removeUser);
      navigate("/");
    }).catch((error) => {
      //navigate("/error");
    });
  }

  return (
    <div className='headerContainer w-full max-w-[1920px] m-auto px-12 py-6'>
        <div className=' flex justify-between headerWrapper'>
          <div className='logoContainer'>
            <img
              alt="logo" 
              className="w-48 h-auto" 
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
            />
          </div>
          {user ?
            <div className='flex justify-between gap-3 items-center userContainer'>
              <img
                alt="user-icon" 
                className='w-[30px] h-[30px]'
                src={user?.photoURL}
              />
              <p className="text-red">Hi&nbsp;{user?.displayName}</p>
              <button 
                className="bg-red border-red rounded-[5px] text-white font-medium hover:bg-hoverRed w-full px-3 py-1"
                onClick={handleSignOut}
              >Sign Out
              </button>
            </div>
            :
            null
          }
        </div>
    </div>
  )
}

export default Header;