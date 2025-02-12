// app/marketplace/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import "./marketplace.css"; 
export default function MarketplaceLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="marketplace-container">
            {children}
        </div>
    );
}
