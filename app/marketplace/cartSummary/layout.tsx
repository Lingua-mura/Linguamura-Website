// app/marketplace/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import "./cart.css"; 
export default function CartSummaryLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="CartSummary-container">
            {children}
        </div>
    );
}
