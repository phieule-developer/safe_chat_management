
import React, { useState } from 'react';
import { Button, Col, Form, Modal, Row, Table, Toast, ToastContainer } from 'react-bootstrap';
const PermissionModal = ({ show, handleClose, permission_detail_list }) => {

    const [showToast, setShowToast] = useState(false);

    const getStatusPermission = (permissions, action) => {

        let permission = permissions.find(e => e.action === action);

        let status = permission ? permission.status : false;

        if (permission)
            return <Form.Check
                type="checkbox"
                className="mb-1"
                id="default-checkbox1"
                defaultChecked={status}
            />
    };

    const handleUpdatePermission = () => {
        setShowToast(true);
        handleClose();
    }

    return (
        <>

            <ToastContainer className="mt-5" position="top-center">

                <Toast bg="success" onClose={() => setShowToast(false)} show={showToast} autohide>
                    <Toast.Header>
                        {/* <img src={logo} alt="brand-logo" height="18" className="me-1" /> */}
                        <strong className="me-auto">Thông báo</strong>
                        {/* <small>11 mins ago</small> */}
                    </Toast.Header>
                    <Toast.Body>Cập nhật thành công</Toast.Body>
                </Toast>
            </ToastContainer>

            <Modal show={show} onHide={handleClose} size={'lg'}>
                <Modal.Header onHide={handleClose} closeButton>
                    <Modal.Title as="h5">CHI TIẾT NHÓM QUYỀN</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#ID</th>
                                        <th>Quyền</th>
                                        <th>Đọc</th>
                                        <th>Thêm</th>
                                        <th>Sửa</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        permission_detail_list.map((permissions, index) => {
                                            return <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{permissions.name}</td>
                                                <td>
                                                    {getStatusPermission(permissions.permission, 'read')}
                                                </td>
                                                <td>
                                                    {getStatusPermission(permissions.permission, 'create')}
                                                </td>
                                                <td>
                                                    {getStatusPermission(permissions.permission, 'update')}
                                                </td>
                                                <td>
                                                    {getStatusPermission(permissions.permission, 'delete')}
                                                </td>
                                            </tr>
                                        }
                                        )
                                    }
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={handleClose}>
                        Hủy
                    </Button>{' '}
                    <Button variant="success" onClick={handleUpdatePermission}>
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default PermissionModal;