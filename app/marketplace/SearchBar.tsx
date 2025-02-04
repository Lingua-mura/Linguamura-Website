// components/SearchBar.tsx
export default function SearchBar() {
    return (
        <div className="search-container">
            <input type="text" className="form-control search-input" placeholder="Search a product" />
            <button type="button" className="btn search-btn">Search</button>
        </div>
    );
}