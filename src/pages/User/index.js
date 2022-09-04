import PageTitle from "../../components/PageTitle";
import { Space, Button, Table } from 'antd';
import { format } from "date-fns";
import { EditTwoTone } from "@ant-design/icons";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getLastOnlineList } from "../../redux/actions";
import { useEffect } from 'react';

const columns = [
    {
        title: 'Họ và tên',
        dataIndex: 'fullname',
        key: 'fullname',
    },
    {
        title: 'Giới tính',
        dataIndex: 'sex',
        render: (sex) => {
            if (sex === 0) {
                return <span>Nữ</span>
            } else {
                return <span>Nam</span>
            }
        }
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Online gần nhất',
        dataIndex: 'last_online',
        key: 'last_online',
        render: (last_online) => (
            <span>{format(last_online, "HH:mm - dd/MM/yyyy")}</span>
        ),
    },
    {
        title: 'Ngày tạo',
        dataIndex: 'created_at',
        key: 'created_at',
        render: (createdAt) => (
            <span>{format(createdAt, "HH:mm - dd/MM/yyyy")}</span>
        ),
    },
    {
        title: 'Hành động',
        dataIndex: 'action',
        key: 'action',
        render: () => (
            <Space>
                <Button ghost={true} icon={<EditTwoTone />}> </Button>
            </Space>

        )
    },
];
const UserPage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLastOnlineList());
    }, [dispatch])

    const { user_list } = useSelector(state => ({
        user_list: state.dashboardReducer.user_list
    }));
    return <>
        <PageTitle title="Quản lý người dùng" />
        <Card>
            <Card.Body>
                <Table dataSource={user_list} columns={columns} />
            </Card.Body>
        </Card>
    </>
};
export default UserPage;