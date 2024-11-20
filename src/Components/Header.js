import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../utils/constant ";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log({user});

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
    .catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(
            addUser({
              uid: uid, 
              email: email, 
              displayName: displayName, 
              photoURL: photoURL
            })
          );
          navigate("/browse");
        } else {
            dispatch(removeUser());
            navigate("/");
        }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className='headerContainer w-full max-w-[1920px] m-auto px-12 py-6'>
        <div className=' flex justify-between headerWrapper'>
          <div className='logoContainer'>
            <img
              alt="logo" 
              className="w-48 h-auto" 
              src={LOGO}
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