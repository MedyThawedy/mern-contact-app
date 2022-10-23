import './header.css';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header>
            <div>
                <input type="text" placeholder='Search contact' />
                 <Link to="/create"><p >Create New Contact</p></Link>
            </div>
        </header>
    );
}

export default Header;