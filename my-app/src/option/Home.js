import React from "react"; 
import { Link } from "react-router-dom"; 
import BrandExample from "./์Navbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Home = () => { 
return ( 
	<section2 className='section'>
        <BrandExample></BrandExample>
        <Container>
            <br/><br/><br/>
            <Row >
                <Col md={4} className="border p-3">
                    <Link to="/clause1" className='btn'>ข้อที่1</Link><br/>
                    <Link to="/clause2" className='btn'>ข้อที่2</Link><br/>
                    <Link to="/clause3" className='btn'>ข้อที่3</Link><br/>
                    <Link to="/clause4" className='btn'>ข้อที่4</Link><br/>
                    <Link to="/clause5" className='btn'>ข้อที่5</Link><br/>
                    <Link to="/clause6" className='btn'>ข้อที่6</Link><br/>
                    <Link to="/clause7" className='btn'>ข้อที่7</Link><br/>
                    <Link to="/clause8" className='btn'>ข้อที่8</Link><br/>
                    <Link to="/clause9" className='btn'>ข้อที่9</Link><br/>
                </Col>
                    
                <Col md={{ span: 4, offset: 4 }} className="border p-3">
                    <Link to="/clause11" className='btn'>ข้อ11</Link><br/>
                    <Link to="/clause13" className='btn'>ข้อ13</Link><br/>
                    <Link to="/clause15" className='btn'>ข้อ15</Link><br/>
                    <Link to="/clause16" className='btn'>ข้อ16</Link><br/>
                    <Link to="/clause17" className='btn'>ข้อ17</Link><br/>
                </Col>
            </Row>
        <br/><br/>
        <Row >
            <Col md={{ span: 4, offset: 0 }} className="border p-3">
                <Link to="/clause24" className='btn'>ข้อ24</Link><br/>
                <Link to="/clause25" className='btn'>ข้อ25</Link><br/>
                <Link to="/clause26" className='btn'>ข้อ26</Link><br/>
                <Link to="/clause28" className='btn'>ข้อที่28</Link><br/>
            </Col>
            <Col md={{ span: 4, offset: 4 }} className="border p-3">
                <Link to="/clause30" className='btn'>ข้อ30</Link><br/>
                <Link to="/clause31" className='btn'>ข้อ31</Link><br/>
                <Link to="/clause32" className='btn'>ข้อ32</Link><br/>
                <Link to="/clause33" className='btn'>ข้อ33</Link><br/>
                <Link to="/clause34" className='btn'>ข้อ34</Link><br/>

            </Col>
        </Row>
      
    </Container>
    </section2>
); 
}; 

export default Home; 
