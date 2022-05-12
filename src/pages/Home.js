import React from "react";
import Countries from "../components/Countries";
import Logo from "../components/logo";
import Naviagation from "../components/Naviagation";

const Home = () => {
    return(
        <div>
            <Logo />
            <Naviagation />
            <Countries />
        </div>
    );
};

export default Home;