import React from "react";
import {InputText} from "primereact/inputtext";
import {Checkbox} from "primereact/checkbox";
import {Button} from "primereact/button";
import {Link} from "react-router-dom";
import "../../style/login.css"

function Login() {
    const singInButtonStyle: object = {
        background: '#4f1efe'
    }

    const textStyle: object = {
        color: '#6e5efe',
    }

    return (
        <div>
            <div className="login flex align-items-center justify-content-center">
                <div className="login-inner surface-card p-4 shadow-2 border-round lg:w-6">
                    <div className="text-center mb-5">
                        <div className="text-900 text-5xl font-bold mb-3">
                            <Link id="route-to-main-text" to="/">
                                <i id="route-to-main-icon" className="far fa-file-alt"/>
                                <a >Edulse</a>
                            </Link>
                        </div>
                        <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
                        <span className="text-600 font-medium line-height-3">Don't have an account?</span>
                        <a style={textStyle} className="font-medium no-underline ml-2 cursor-pointer">
                            <Link id="login-to-registration-link" to="/registration">
                                Create today!
                            </Link>
                        </a>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                        <InputText id="email" type="text" className="w-full mb-3" />

                        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
                        <InputText id="password" type="password" className="blue w-full mb-3 "/>

                        <div className="flex align-items-center justify-content-between mb-6">
                            <div className="flex align-items-center">
                                <Checkbox id="rememberme" /*onChange={e => setChecked(e.checked)} checked={checked} binary */ className="mr-2" />
                                <label htmlFor="rememberme">Remember me</label>
                            </div>
                            <a style={textStyle} className="font-medium no-underline ml-2 text-right cursor-pointer">Forgot your password?</a>
                        </div>
                        <Button label="Sign In" style={singInButtonStyle} icon="pi pi-user" className="sing-in-button w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login