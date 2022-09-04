import { FormInput } from '../../components';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PageTitle from '../../components/PageTitle';
import { useForm } from 'react-hook-form';

const Profile = () => {
    /*
    form validation schema
    */
    const schemaResolver = yupResolver(
        yup.object().shape({
            username: yup.string().required('Please enter Username'),
            email: yup.string().required('Please enter Email address'),
            password: yup.string().required('Please enter Password'),
            confirmpassword: yup
                .string()
                .oneOf([yup.ref('password'), null], "Passwords don't match")
                .required('This value is required.'),
            checkbox: yup.bool().oneOf([true]),
        })
    );
    const methods = useForm({
        resolver: schemaResolver,
    });
    const {
        // handleSubmit,
        register,
        control,
    } = methods;

    return (
        <>
            <PageTitle
                title={'Trang cá nhân'}
            />
            <Card>
                <Card.Body>
                    <h4 className="header-title mt-1 mb-4 text-center">Thông tin cá nhân</h4>
                    <div className="text-center mt-1">
                        <img src="https://i1-vnexpress.vnecdn.net/2022/05/16/kenhhangbang-1652712517-5379-1652712816.jpg?w=120&h=72&q=100&dpr=2&fit=crop&s=jSjWufIZ2HCl-mh4WUDTrg" alt="" className="avatar-lg rounded-circle mb-3" />
                    </div>
                    <form name="chat-form" id="chat-form">
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={{ offset: 3 }} md={2}>
                                Họ và tên
                            </Form.Label>
                            <Col md={4}>
                                <FormInput
                                    type="password"
                                    name="password2"
                                    placeholder="Họ và tên"
                                    register={register}
                                    key="password2"
                                    // errors={errors}
                                    control={control}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label sm={{ offset: 3 }} column md={2}>
                                Email
                            </Form.Label>
                            <Col md={4}>
                                <FormInput
                                    type="password"
                                    name="confirmPassword2"
                                    placeholder="Email"
                                    register={register}
                                    key="confirmPassword2"
                                    // errors={errors}
                                    control={control}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label sm={{ offset: 3 }} column md={2}>
                                Số điện thoại
                            </Form.Label>
                            <Col md={4}>
                                <FormInput
                                    type="url"
                                    name="webSite"
                                    placeholder="Số điện thoại"
                                    register={register}
                                    key="webSite"
                                    // errors={errors}
                                    control={control}
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 text-center">
                            <Col>
                                <Button variant="primary" className="me-1" type="submit">
                                    Cập nhật
                                </Button>
                            </Col>
                        </Form.Group>
                    </form>
                </Card.Body>
            </Card>
        </>

    );
};
export default Profile;