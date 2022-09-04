import React, { useEffect } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import StatisticsChartWidget from '../../components/StatisticsChartWidget';
import { getConversationList, statisticTotalMember } from '../../redux/actions';
import PageTitle from './../../components/PageTitle/index';
import { format } from "date-fns";
// import { EditTwoTone } from '@ant-design/icons';


const Dashboard = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(statisticTotalMember());
        dispatch(getConversationList());
    }, [dispatch])

    const { total_member, conversation_list } = useSelector(state => ({
        total_member: state.dashboardReducer.total_member,
        conversation_list: state.conversationReducer.conversation_list
    }));
    return (
        <>
            <PageTitle title="Trang chủ" />

            <Row>
                <Col sm={3} xl={3}>
                    <StatisticsChartWidget
                        title="Số người dùng"
                        stats={total_member}
                        colors={['#727cf5']}
                    />
                </Col>

                <Col sm={3} xl={3}>
                    <StatisticsChartWidget
                        title="Số người dùng"
                        stats={total_member}
                        colors={['#727cf5']}
                    />
                </Col>
            </Row>


            <Card>
                <Card.Body>
                    <h4 className="header-title">LIÊN HỆ GẦN NHẤT</h4>
                    <Table>
                        <thead>
                            <tr>
                                <th>Tên</th>
                                <th>Tin nhắn gần nhất</th>
                                <th>Ngày tạo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                conversation_list.map((conversation, index) => {
                                    return <tr key={index}>
                                        <td>{conversation.type === 0 ? conversation.member[0].fullname : conversation.name}</td>
                                        <td>
                                            {format(conversation.last_update, "HH:mm - dd/MM/yyyy")}
                                        </td>
                                        <td>
                                            {format(conversation.created_at, "HH:mm - dd/MM/yyyy")}
                                        </td>
                                    </tr>
                                }
                                )
                            }
                        </tbody>
                    </Table>

                </Card.Body>
            </Card>
        </>
    );
};

export default Dashboard;
