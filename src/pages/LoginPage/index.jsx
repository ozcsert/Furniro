
// import React from 'react'
// import CreateAccount from '../../components/CreateAccount'
// import LoginScreen from '../../components/LoginScreen'
import AuthScreen from "../../components/AuthScreen"
// import FormHandler from "../../components/FormHandler/FormHandler"

const LoginPage = () => {
    return (
        <>
            <AuthScreen type={'login'} />
            <AuthScreen type={'register'} />
        </>
    )
}

export default LoginPage
