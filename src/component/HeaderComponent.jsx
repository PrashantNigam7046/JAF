import React from "react";
import {Row, Container, Col }from 'react-bootstrap';
import "../assets/styles/footerheader.css"

const HeaderComponent = () => {
    return (<>

<div className="Header-main  fixed-top sticky-top">
    <Container fluid>
        <div className="header_box">
            <div className="logo_left">
                <img src="./rmLogo.png"></img>
            </div>
            
            {/* <div className="logo_right">
                <img src="./RMT-Engg-powred.png"></img>
            </div> */}

        </div>
    </Container>
</div>

    </>)
}


export default HeaderComponent