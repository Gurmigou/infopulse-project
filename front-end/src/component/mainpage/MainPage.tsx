import React from "react";
import "../../style/mainPage.css"
import MainPageComponent from "./MainPageComponent";
import { Link } from "react-router-dom";

function MainPage() {
    return (
        <div className="main-page">
            <div className="main-page-nav">
                <Link id="main-page-nav-link-1" className="main-page-nav-link" to="/">
                    <h1 className="">Edulse</h1>
                </Link>
                <Link id="main-page-nav-link-2" className="main-page-nav-link" to="/login">
                    <h1 className="">Sign in</h1>
                </Link>
            </div>
            <div className="main-page-components-box">
                <div className="main-page-components-box-inner">
                    <MainPageComponent title={"New form"} index={1} buttonText={"Create"} onClickRoute={"/form/construct"}/>
                    <MainPageComponent title={"Form list"} index={2} buttonText={"Watch"} onClickRoute={"/user/form-list"}/>
                </div>
            </div>
        </div>
    )
}

export default MainPage