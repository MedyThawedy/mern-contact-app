import './navigation.css';
import { Link } from 'react-router-dom';


function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
                <li>
                    <Link to="/recents">Recents</Link>
                </li>
                <li>
                    <Link to="/">Contacts</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;