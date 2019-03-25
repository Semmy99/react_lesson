import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import '../bootstrap.css'
import './main.css'

const Main = () => {
	return (
		<Container className="container">
			<Row className="main_row">
				<Col >
					<div className="viewBlock"></div>
				</Col>
				<Col >
					<div className="viewBlock"></div>
				</Col>
				<Col >
					<div className="viewBlock"></div>
				</Col>
			</Row>
		</Container>
	)
};

export default Main;