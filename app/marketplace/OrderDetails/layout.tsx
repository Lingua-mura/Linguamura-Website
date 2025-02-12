// app/marketplace/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import "./details.css"; 
export default function OrderDetailsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="OrderDetails-container">
            {children}
        </div>
    );
}
