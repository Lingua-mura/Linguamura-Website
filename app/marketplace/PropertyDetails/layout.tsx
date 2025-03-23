// app/marketplace/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import "./prop.css"; 
export default function PropertyDetailsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="PropertyDetails-container">
            {children}
        </div>
    );
}
