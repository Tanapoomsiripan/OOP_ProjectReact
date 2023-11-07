import React from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Clause7() {
    const day = new Date("08/07/2566");

    var day1 = day.getTime() + (86400000 * 3);
    var day2 = day.getTime() + (86400000 * 10);
    var day3 = day.getTime() + (86400000 * 123);

    var date = new Date(day);
    var days = date.getDate()+1 + '/' + date.getMonth()  + '/' + date.getFullYear();

    var date1 = new Date(day1);
    var days1 = date1.getDate()+1 + '/' + date1.getMonth()  + '/' + date1.getFullYear(); // Months are 0-indexed, so add 1 to get the correct month.

    var date2 = new Date(day2);
    var days2 = date2.getDate() +1+ '/' + date2.getMonth()  + '/' + date2.getFullYear();

    var date3 = new Date(day3);
    var days3 = date3.getDate() +1+ '/' + date3.getMonth()  + '/' + date3.getFullYear();

    return (
        <div className="centered-container">
             <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={6} className="border p-3">
                    <h1>วันนี้วันที่ {days}</h1>
                    <h2>อีก 3 วันคือวันที่ {days1}</h2>
                    <h2>อีก 10 วันคือวันที่ {days2}</h2>
                    <h2>อีก 123 วันคือวันที่ {days3}</h2>
                    <Button href="/">BackHome</Button>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Clause7;
