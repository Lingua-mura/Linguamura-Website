// components/BottomNav.tsx
import "./marketplace.css";
export default function BottomNav() {
    return (
        
        <nav className="navbar fixed-bottom navbar-light bg-white border-top mt-5">
            <div className="container d-flex justify-content-around">
                <a href="#" className="text-dark text-center"><i className="fas fa-home"></i><br />Home</a>
                <a href="#" className="text-dark text-center"><i className="fas fa-gem"></i><br />Go Premium</a>
                <a href="#" className="text-dark text-center"><i className="fas fa-wallet"></i><br />Wallet</a>
                <a href="#" className="text-dark text-center"><i className="fas fa-users"></i><br />Community</a>
                <a href="#" className="text-dark text-center"><i className="fas fa-user"></i><br />Account</a>
            </div>
        </nav>
    );
}