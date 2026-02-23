import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShippingFast, FaHeadset, FaUndo, FaLock } from "react-icons/fa";

const Process = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state;

    const handleBack = () => {
        navigate(-1); // go back to Card page
    };

    const handlePayment = () => {
        window.location.href =
            "https://buy.stripe.com/test_7sY9AU0BncOU8jqc4A9fW00";
    };

    if (!product) {
        return <h2 className="text-center mt-10">No Product Data</h2>;
    }

    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 py-10">
            <h2 className="text-center text-3xl font-bold mb-6">
                Order Summary
            </h2>

            <div className="border p-6 rounded-xl shadow mb-8 max-w-lg mx-auto">
                <p><strong>Name:</strong> {product.name}</p>
                <p><strong>Description:</strong> {product.description}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Price:</strong> ₹{product.price}</p>
                <p><strong>Offer Price:</strong> ₹{product.offerPrice}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="p-6 border rounded-xl shadow text-center">
                    <FaShippingFast className="text-4xl text-orange-500 mx-auto mb-4" />
                    <h3>Fast Delivery</h3>
                </div>

                <div className="p-6 border rounded-xl shadow text-center">
                    <FaHeadset className="text-4xl text-orange-500 mx-auto mb-4" />
                    <h3>24/7 Support</h3>
                </div>

                <div className="p-6 border rounded-xl shadow text-center">
                    <FaUndo className="text-4xl text-orange-500 mx-auto mb-4" />
                    <h3>Easy Returns</h3>
                </div>

                <div
                    onClick={handlePayment}
                    className="p-6 border rounded-xl shadow text-center cursor-pointer hover:bg-gray-100"
                >
                    <FaLock className="text-4xl text-orange-500 mx-auto mb-4" />
                    <h3>Secure Payment</h3>
                </div>
            </div>

            <div className="text-center">
                <button
                    onClick={handleBack}
                    className="px-6 py-2 bg-red-500 text-white rounded"
                >
                    Back
                </button>
            </div>
        </div>
    );
};

export default Process;