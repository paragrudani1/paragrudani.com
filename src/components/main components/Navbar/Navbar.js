import React, {Component} from 'react';
import './Navbar.modules.css'
import Sidebar from './Sidebar/Sidebar'
import { Link } from 'react-router-dom'

class NavBar extends Component {

    state =  {
        toggled: false
    }

    toggleBar = () => {
        this.setState({toggled: !this.state.toggled})
    }

    render() {
        return ( 
            <React.Fragment>
                <nav>
                    {/* Logo */}
                    <div className='logo'>
                        <Link to="/home"><h1>Parag Rudani</h1></Link>
                    </div>
    
                    {/* Burger Menu */}
                    <div className="burger" onClick={this.toggleBar}>
                        <div className="line line1"></div>
                        <div className="line line2"></div>
                        <div className="line line3"></div>
                    </div>
        </nav>
            <Sidebar toggled={this.state.toggled} />
            </React.Fragment>
         );
    }
}
 
export default NavBar;