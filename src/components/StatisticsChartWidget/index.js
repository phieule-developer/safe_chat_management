import React from 'react';
import { Card } from 'react-bootstrap';

// interface StatisticsChartWidgetProps {
//     title?: string;
//     stats?: string;
//     trend: {
//         textClass: string;
//         icon: string;
//         value: string;
//     };
//     colors?: Array<string>;
// }

const StatisticsChartWidget = ({ title, stats }) => {

    return (
        <Card>
            <Card.Body>
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <span className="text-muted text-uppercase fs-12 fw-bold">{title}</span>
                        <h3 className="mb-0">{stats}</h3>
                    </div>
                    {/* <div className="align-self-center flex-shrink-0">
                        <span className={classNames('fw-bold', 'fs-13', trend.textClass)}>
                            <i className={trend.icon}></i> {trend.value}
                        </span>
                    </div> */}
                </div>
            </Card.Body>
        </Card>
    );
};

export default StatisticsChartWidget;
