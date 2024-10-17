import "./style.scss"
import Github from "../../assets/images/GitHub.png"
import Google from "../../assets/images/Google.png"





const LoginScreen = () => {


    return (
        <form className="login-form">
            <div className="login-form-main">
                <h1 className="login-form-main-title">Login</h1>
                <div className="login-form-main-inputs">
                    <h3 className="login-form-main-input-title">Email adress</h3>
                    <input className="login-form-main-input" name="email" placeholder="Please enter your email" />
                    <h3 className="login-form-main-input-title">Password</h3>
                    <input className="login-form-main-input" name="password" placeholder="Please enter your password" />
                </div>
                <h2 className="login-form-main-subtitle">-OR-</h2>
                <div className="login-form-main-links">
                    <div className="login-form-main-link">
                        <img width={50} height={50} src={Github} alt="" />
                        <p className="login-form-main-link-text">Sing up with GitHub</p>
                    </div>
                    <div className="login-form-main-link">
                        <img width={50} height={50} src={Google} alt="" />
                        <p className="login-form-main-link-text">Sing up with GitHub</p>
                    </div>
                </div>
                <div className="login-form-main-btn">
                    <button className="login-form-main-btn">Login</button>
                </div>
            </div>
        </form>
    )
}

export default LoginScreen