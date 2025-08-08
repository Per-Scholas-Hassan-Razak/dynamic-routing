import {useAuth} from '../contexts/contexts'

const Login = () => {

    const {isAuthenticated, login, logout} = useAuth();

    return (
        <div>
            <button
            onClick={isAuthenticated ? logout : login}
            >{isAuthenticated ? 'logout' : 'login'}</button>
        </div>
    )
}

export default Login