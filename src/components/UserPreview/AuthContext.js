import { createContext } from 'react'

const AuthContext = createContext({ isAuthenticated: false, currentUser: null });

export default AuthContext;
