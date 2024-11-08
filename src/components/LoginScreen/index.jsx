
import "./style.scss"
import Github from "../../assets/images/GitHub.png"
import Google from "../../assets/images/Google.png"
import { useState, useEffect } from 'react';



const LoginScreen = ({ type = "login" }) => {

    const [email, setEmail] = useState('');
    const [emailList, setEmailList] = useState([]);

    useEffect(() => {
        const savedEmails = JSON.parse(localStorage.getItem('emailList'));
        if (savedEmails) {
            setEmailList(savedEmails);
        }
    }, []);

    const saveEmailsToLocalStorage = (emails) => {
        localStorage.setItem('emailList', JSON.stringify(emails));
    };
    const addEmail = () => {
        if (email && !emailList.includes(email)) {
            const updatedList = [...emailList, email];
            setEmailList(updatedList);
            saveEmailsToLocalStorage(updatedList);
            setEmail('');
        }
    };


    return (
        <form className="login-form">
            <div className="login-form-main">
                <h1 className="login-form-main-title">{type === "login" ? "Login" : "Create your Free Account"}</h1>
                <div className="login-form-main-inputs">
                    {
                        type === "login" ? null : (
                            <div>
                                <h3 className="login-form-main-input-title">Full name</h3>
                                <input className="login-form-main-input" name="email" placeholder="Please enter your full name" />
                            </div>
                        )
                    }
                    <h3 className="login-form-main-input-title">Email adress</h3>
                    <input className="login-form-main-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Please enter your email" />
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
                {
                    type === "login" ? null : (<p className='sing-in-text'>Already have a account? <a href="#" className='sing-in-login-btn'> Log in</a></p>)
                }
                {
                    type === "login" ? (
                        <div className="login-form-main-btn">
                            <button className="login-form-main-btn">Login</button>
                        </div>
                    ) : (
                        <div className="sing-in-main-btn-div">
                            <button className="sing-in-main-btn" onClick={addEmail}>Create Account</button>
                        </div>
                    )
                }
            </div>
        </form>
    )
}

export default LoginScreen