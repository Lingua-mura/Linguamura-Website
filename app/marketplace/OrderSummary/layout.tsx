// app/marketplace/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import "./Order.css"; 
export default function OrderSummaryLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="OrderSummary-container">
            {children}
        </div>
    );
}
