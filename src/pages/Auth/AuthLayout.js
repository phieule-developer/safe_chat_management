import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';


const AuthLayout = ({ children }) => {

    useEffect(() => {
        if (document.body) document.body.classList.add('authentication-bg');

        return () => {
            if (document.body) document.body.classList.remove('authentication-bg');
        };
    }, []);

    return (
        <div className="account-pages my-5">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={5}>
                        <Card>
                            <Card.Body className="p-0">
                                <Row className="g-0">
                                    <Col lg={12} className="p-4">
                                        {children}
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AuthLayout;
