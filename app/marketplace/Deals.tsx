// components/Deals.tsx
export default function Deals() {
    return (
        <div className="p-3">
            <h5>Today's Deals</h5>
            <div className="row mb-5">
                <div className="col-3 col-sm-6 col-md-3">
                    <div className="card">
                        <img src="/imgs/shoe.jpeg" className="card-img-top" alt="Nike Air Max 270" style={{ maxWidth: "100px", height: "auto" }} />
                        <div className="heart-icon" onClick={(e) => e.currentTarget.classList.toggle('liked')}>
                            <i className="fas fa-heart"></i>
                        </div>
                        <div className="card-body">
                            <h6 className="card-title">Nike Air Max 270</h6>
                            <p className="fw-bold">N150,000 <span className="text-muted text-decoration-line-through">N170,000</span> <span className="text-success">-13.33%</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
