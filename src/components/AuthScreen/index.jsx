
import "./style.scss"
import FormHandler from '../FormHandler/FormHandler.jsx'



const AuthScreen = ({ type }) => {


    return (
        <form className="login-form">
            <div className="login-form-main">
                <h1 className="login-form-main-title">{type === "login" ? "Login" : "Create your Free Account"}</h1>
                {
                    type === "login" ? <FormHandler page={'login'} /> : (<FormHandler page={'register'} />)
                }
            </div>
        </form>
    )
}

export default AuthScreen