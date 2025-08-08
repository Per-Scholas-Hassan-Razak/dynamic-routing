import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/contexts"

const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useAuth()

    if(!isAuthenticated){
        alert("Must be an authorized user to access this page!")
        return <Navigate to='/login' replace/>
    }
    return children
}

export default ProtectedRoute