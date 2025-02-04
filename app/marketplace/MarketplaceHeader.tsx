// components/MarketplaceHeader.tsx
export default function MarketplaceHeader() {
    return (
        <div className="p-3 text-white" style={{ backgroundColor: "#00A6A6" }}>
            <nav className="nav d-flex justify-content-around">
                <a href="#" className="text-white"><i className="fas fa-store"></i> Market</a>
                <a href="#" className="text-white"><i className="fas fa-building"></i> Apartment</a>
                <a href="#" className="text-white"><i className="fas fa-hotel"></i> Hotels</a>
                <a href="#" className="text-white"><i className="fas fa-home"></i> Home</a>
            </nav>
            <h4>Marketplace</h4>
            <p>Discover the perfect blend of quality and convenience</p>
            <button className="btn btn-light">Become a seller</button>
        </div>
    );
}
