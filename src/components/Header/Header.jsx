import React from 'react';
import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
	return (
		<header className="header">
			<Link to="/Main" className="header_link">Main</Link>
			<Link to="/InnerPage" className="header_link">Inner Page</Link>
			<Link to="/OtherPage" className="header_link">Other Page</Link>
		</header>
	)
};

export default Header