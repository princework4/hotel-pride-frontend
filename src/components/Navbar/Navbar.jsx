import './Navbar.css';

const Navbar = () => {
    return (

        <div className="navbar-container">
            <div className="video-background">
                <video id="background-video" autoPlay playsinline muted loop preload="auto">
                    <source src="https://assets-cug1-825v2.tajhotels.com/video/TAJ%20WEBSITE%20FILM_1920%20X%20930_148mb.mp4?Impolicy=Medium_High" type="video/mp4" />
                </video>
            </div>
            <div className="navbar wrapper">
                <div className="logo">
                    <h1>MyLogo</h1>
                </div>
                <div className="nav-items">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#contact">Offers</a></li>
                    </ul>
                </div>
                <div className="auth-buttons">
                    <button className="login-btn">Login</button>
                    <button className="register-btn">Register</button>
                    <button className="book-btn">BOOK YOUR STAY</button>
                </div>

                {/* <div className="mobile-nav-toggle">
                    <button className='hamburger'>Menu</button>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;