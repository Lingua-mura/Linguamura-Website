// app/marketplace/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import "./prop.css"; 
export default function RecommendedPropertiesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="RecommendedProperties-container">
            {children}
        </div>
    );
}
