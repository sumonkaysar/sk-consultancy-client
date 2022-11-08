import { createContext, useState } from "react";
import {getAuth} from "firebase/auth";
import app from "../../Firebase/Firebase.config";

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({displayName: 'sk'});
  const [loading, setLoading] = useState(true);

  const authInfo = {
    user,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
