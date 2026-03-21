import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get data from previous page
  const initialCart = location.state || [];

  const [cart, setCart] = useState(initialCart);

  
  // Remove Item
  const handleRemove = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  // Total Price
  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  // Go To Payment
  const handleGoToPayment = () => {
    navigate("/process", { state: cart });
  };

  return (
    <div className="max-w-xl mx-auto mt-10">

      <h1 className="text-2xl font-bold text-center mb-6">
        My Cart 🛒
      </h1>

      {/* ✅ Cart Items */}
      {cart.length === 0 ? (
        <p className="text-center">No products in cart</p>
      ) : (
        <>
          <div className="space-y-4 mb-4">
            {cart.map((product, index) => (
              <div
                key={index}
                className="border p-4 rounded shadow flex justify-between items-center bg-white"
              >
                <div>
                  <p className="font-bold">{product.title || product.name}</p>
                  <p className="text-gray-600">{product.category}</p>
                </div>

                <div className="text-right">
                  <p className="font-semibold">₹{product.price}</p>

                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500 text-sm mt-1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Total */}
          <div className="text-right font-bold text-lg mb-4">
            Total: ₹{totalPrice}
          </div>

          {/* ✅ Go To Payment */}
          <button
            onClick={handleGoToPayment}
            className="w-full bg-green-600 text-white px-4 py-2 rounded"
          >
            Go to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;