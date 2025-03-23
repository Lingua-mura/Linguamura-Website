import "./details.css"
import Header from "./Header";
import OrderConfirmation from "./OrderConfirmation";

const Page = () => {
    return (
        <div className="container">
            <Header />
            <OrderConfirmation />
        </div>
    );
};

export default Page;