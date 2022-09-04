import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

// images
import notFound from '../../assets/images/not-found.png';

const NotFound = () => {
    return (
        <div className="account-pages mt-5 mb-5">
            <Container>
                <Row className="justify-content-center">
                    <Col xl={4} lg={5} xs={8}>
                        <div className="text-center">
                            <div>
                                <img src={notFound} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12} className="text-center">
                        <h3 className="mt-3">Chúng tôi không tìm thấy trang bạn yêu cầu</h3>
                        <p className="text-muted mb-4">
                            Trang này không được tìm thấy.
                            <br />
                            Bạn có thể đã nhập sai địa chỉ hoặc trang có thể đã bị di chuyển.
                        </p>
                        <Link to="/" className="btn btn-lg btn-primary">
                            Quay về trang chủ
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;
