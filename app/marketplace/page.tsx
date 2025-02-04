// pages/index.tsx


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
            <Deals/>
            <BottomNav/>
        </>
    );
}
