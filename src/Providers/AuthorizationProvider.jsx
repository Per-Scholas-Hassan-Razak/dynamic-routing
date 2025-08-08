import { useState } from "react"
import {AuthContext} from '../contexts/contexts'

const AuthorizationProvider = ({children}) => {

const [isAuthenticated, setIsAuthenticated] = useState(false)

const login = () => {
    setIsAuthenticated(true)
    alert('user is logged in!')
}

const logout = () => {
    setIsAuthenticated(false)
    alert('user is logged out!')
}


return (
    <AuthContext.Provider value={{isAuthenticated,login,logout}}>
        {children}
    </AuthContext.Provider>
)

}

export default AuthorizationProvider