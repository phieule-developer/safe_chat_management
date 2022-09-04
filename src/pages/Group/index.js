import { useEffect, useState } from "react";
import { Card, Col, Row, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle";
import { getAllGroups, getDetailPermissions } from "../../redux/group/actions";
import PermissionModal from "./PermissionModal";
// import { Pagination } from './../../components/Pagination/index';

// const sizeList = [
//     {
//         text: '5',
//         value: 5,
//     },
//     {
//         text: '10',
//         value: 10,
//     }
// ];
// const columns = [
//     {
//         Header: 'ID',
//         accessor: 'id',
//     },
//     {
//         Header: 'USERNAME',
//         accessor: 'username',
//     },
//     {
//         Header: 'MẬT KHẨU',
//         accessor: 'password',
//     },
//     {
//         Header: 'IP',
//         accessor: 'ip',
//     },
//     {
//         Header: 'PORT',
//         accessor: 'port',
//     },
// ];
const GroupPage = () => {

    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const openModalPermissionDetail = (group_id) => {
        dispatch(getDetailPermissions(group_id));
        handleShow();
    };
    useEffect(() => {
        dispatch(getAllGroups())
    }, [dispatch]);

    const { groups_list, permission_detail_list } = useSelector(state => ({
        groups_list: state.groupReducer.groups_list,
        permission_detail_list: state.groupReducer.permission_detail_list
    }));

    return (<>
        <PageTitle title="Quản lý nhóm quyền" />
        <Row>
            <Col>
                <Card>
                    <Card.Body>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>#ID</th>
                                    <th>Nhóm quyền</th>
                                    <th>Mô tả</th>
                                    <th>Số thành viên</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    groups_list.map((group, index) => {
                                        return <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{group.name}</td>
                                            <td>{group.description}</td>
                                            <td>{group.number_user}</td>
                                            <td>
                                                <Button className="uil-edit" variant="danger" size="sm" onClick={() => openModalPermissionDetail(group._id)}></Button>
                                            </td>
                                        </tr>

                                    }
                                    )
                                }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        {/* <Pagination tableProps={columns, groups_list} sizePerPageList={sizeList} /> */}
        <PermissionModal show={show} handleClose={handleClose} permission_detail_list={permission_detail_list}></PermissionModal>
    </>)
}
export default GroupPage;