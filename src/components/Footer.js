import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

    export const Footer = () => {
    return (
        <footer className="footer">
        <Container>
            <Row className="align-items-center">
            <MailchimpForm />
            <Col size={12} sm={6}>
            <h2 className="nav-logo">logo</h2>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
                <div className="social-icon">
                <a href="https://www.linkedin.com/in/aya-sayed-81446a24a"><h5><FaLinkedinIn/></h5></a>
                <a href="https://www.facebook.com/profile.php?id=100022549220946&mibextid=ZbWKwL"><h5><FaFacebookF/></h5></a>
                <a href="https://instagram.com/ayasayed5196?igshid=MzNlNGNkZWQ4Mg=="><h5><FaInstagram/></h5></a>
                </div>
                <p>--copyright 2023-- . all rights reserved here by aya sayed ibrahim</p>
            </Col>
            </Row>
        </Container>
        </footer>
    )
    }