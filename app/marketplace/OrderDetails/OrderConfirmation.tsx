import Notification from "./Notification"; 

const OrderConfirmation = () => {
    return (
        <div className="container-box">
            <i className="fas fa-check-circle checkmark"></i>
            <p className="mt-2">Thank you for ordering from <strong>Linguaumura</strong>.</p>
            <p className="order-info"><strong>Order code:</strong> <span style={{ color: "#0066ff" }}>6522781190</span></p>
            <button className="order-btn">Order details</button>
            <Notification />
            <p className="order-info mt-2">Delivery between <strong>27 August</strong> and <strong>29 August</strong></p>
        </div>
    );
};

export default OrderConfirmation;