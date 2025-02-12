const Header = () => {
    return (
        <div className="header-bar">
            <span>No Ads yet...</span>
            <div className="header-icons">
                <span className="gold-coins"><i className="fas fa-coins"></i> 25k</span>
                <i className="far fa-bell"></i><span className="notification-badge">2</span>
            </div>
        </div>
    );
};

export default Header;