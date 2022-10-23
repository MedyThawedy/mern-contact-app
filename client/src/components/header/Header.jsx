import './header.css';

function Header() {
    return (
        <header>
            <div>
                <input type="text" placeholder='Search contact' />
                <button>Create new contact</button>
            </div>
        </header>
    );
}

export default Header;