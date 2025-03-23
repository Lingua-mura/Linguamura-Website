// app/marketplace/layout.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import "./search.css"; 
export default function SearchLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="Search-container">
            {children}
        </div>
    );
}
