import React from "react";
import Header from "../../components/header/header.component";
import "./homepage.styles.css";
import Content from "../../components/content/content.component";
const HomePage = ()=>{
    return(
        <div className="main-container">
            <Header/>
            <Content/>
        </div>
    );
};

export default HomePage;

