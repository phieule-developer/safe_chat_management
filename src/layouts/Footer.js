import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container-fluid">
                <Row>
                    <Col sm={6}>
                        {currentYear} &copy; Phát triển bởi <Link to="#">NOW PROXY</Link>
                    </Col>

                    <Col sm={6}>
                        <div className="text-sm-end footer-links d-none d-sm-block">
                            <Link to="#">Về chúng tôi</Link>
                            <Link to="#">Trợ giúp</Link>
                            <Link to="#">Liên hệ chúng tôi</Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    );
};
export default Footer;