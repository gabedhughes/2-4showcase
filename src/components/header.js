import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Button, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
    render() {
        return (
            <Navbar sticky="top" bg="dark" expand="md">
                <Navbar.Brand className="mx-auto">
                    <div className='navbar-text'>
                        <h1 className='header-text'>Theatre 2-4 Showcase</h1>
                    </div>
                </Navbar.Brand>
                <Button variant="primary" className="donate-button ml-auto" style={{backgroundColor: 'white'}}>
                    <a style={{display: "table-cell", color: "black"}} href="https://vrhs-drama-boosters.square.site/" target="_blank">Donate</a>
                </Button>
            </Navbar>
        );
    }
}

ReactDOM.render(
    <Header/>,
    document.getElementById("header")
)

export default Header;