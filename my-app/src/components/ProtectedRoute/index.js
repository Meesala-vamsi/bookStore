import Cookies  from "js-cookie"
import { Redirect,Route } from "react-router-dom/cjs/react-router-dom.min"

const ProtectedRoute=(props)=>{
    const getToken=Cookies.get('jwt_token')
    if(getToken===undefined){
        <Redirect to='/login'/>
    }
    return <Route {...props}/>
}

export default ProtectedRoute