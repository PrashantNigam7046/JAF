import React from "react";
import {Row, Container, Col }from 'react-bootstrap';
import "../assets/styles/footerheader.css"


const FooterComponent = () => {
    return (<>
    <div className="footer fixed-bottom sticky-bottom">
        <Container fluid>
            <Row>
                <Col><div className="footer-color-line bg-red"></div></Col>
                <Col><div className="footer-color-line bg-blue"></div></Col>
                <Col><div className="footer-color-line bg-yellow"></div></Col>
                <Col><div className="footer-color-line bg-green"></div></Col>
            </Row>
            <div className="footer_box">
                <p>Radical Minds Technologies Pvt. Ltd, 368, Udyog Vihar –II, Gurgaon</p>
                <p>Powered By RMT Engineering</p>
            </div> 
        </Container>
    </div>

    </>)
}


export default FooterComponent