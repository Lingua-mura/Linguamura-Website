import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar navbar-light bg-white px-3">
            <Link href="/" className="navbar-brand">
                <i className="fas fa-th"></i>
            </Link>
            <div>
                <span className="me-3">
                    <i className="fas fa-coins"></i> 25k
                </span>
                <Link href="/marketplace" className="me-3">
                    <i className="fas fa-store"></i>
                </Link>
                <i className="fas fa-bell me-3"></i>
            </div>
        </nav>
    );
}
