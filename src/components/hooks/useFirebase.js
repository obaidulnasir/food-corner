import { useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  // is admin 
  const [admin, isAdmin]= useState(false);
  const [isLoading, setIsLoading]= useState(true);

  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  //   google login
  const signInWithGoogle = (location, history) => {
 
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // handleRegisterUserInfo(user?.email, user?.displayName)
        const destination = location?.state?.from||'/';
          history.replace(destination);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(()=>setIsLoading(false));
  };

  //  logout
  const handleLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        alert("Logout Success!!🍷🍷")
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=> setIsLoading(false));
  };

  //   user registration
  const handleUserRegister = (email, password, name, location, history) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        alert(`Welcome  ${name}, your registration success.`)
        handleRegisterUserInfo(email, name);
        const destination = location.state.from||'/';
        history.replace(destination);
        handleRegisterUserInfo(email, name);
        console.log(name);
      })
      .catch((error) => {
        setError(error.message)
        // alert(error);
      });
  };

  //   user email password login
  const handleUserLogin = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
          setUser(result.user);
          alert("user Logged in");
          const destination = location.state.from||'/';
          history.replace(destination);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  //   on auth stage change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        // ...
      }
      setIsLoading(false);
    });
  }, [auth]);


 /*  ================================
  Collect User Email
  ================================ */
  const handleRegisterUserInfo= (email,name)=>{
    console.log(email)
    fetch("https://polar-gorge-22890.herokuapp.com/addCustomer", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, name }),
    })
    .then((res) => res.json())
    .then((result) => console.log(result));
  };
/* ==============================
 admin Check
  ============================= */

  useEffect(()=>{
    fetch(`https://polar-gorge-22890.herokuapp.com/customer/${user?.email}`)
    .then(res=> res.json())
    .then(data => isAdmin(data.admin))
  },[user.email])

  return {
    isLoading,
    admin,
    user,
    error,
    signInWithGoogle,
    handleLogout,
    handleUserLogin,
    handleUserRegister,
  };
};


export default useFirebase;