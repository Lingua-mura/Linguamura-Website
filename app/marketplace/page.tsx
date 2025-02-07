// pages/index.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import "./marketplace.css"; 
import MarketplaceHeader from "./MarketplaceHeader";
import Navbar from "./Navbar";
import NoAds from "./NoAds";
import Categories from "./Categories";
import Deals from "./Deals";
import BottomNav from "./BottomNav";
import SearchBar from "./SearchBar";


export default function Home() {
    return (
        <>
            <Navbar/>
            <NoAds/>
            <MarketplaceHeader/>
            <SearchBar/>
            <Categories/>
            <div className="mb-4"> {/* Adds bottom margin to Deals */}
                <Deals/>
            </div>
            <div className="mt-4"> {/* Adds top margin to BottomNav */}
                <BottomNav/>
            </div>
        </>
    );
}


