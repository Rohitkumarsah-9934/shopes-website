import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaShippingFast, FaHeadset, FaUndo, FaLock } from "react-icons/fa";

const Process = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get cart data
  const cart = location.state || [];

  const handleBack = () => {
    navigate(-1);
  };

  //  Total Price
  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );
//    payment
       const handlePayment = () => {
        window.location.href =
             "https://buy.stripe.com/test_7sY9AU0BncOU8jqc4A9fW00";
     };

  if (cart.length === 0) {
    return <h2 className="text-center mt-10">No Product Data</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h2 className="text-center text-3xl font-bold mb-8">
        Payment Process 
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {/*  LEFT SIDE - Order Summary */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b pb-2"
              >
                <div>
                  <p className="font-medium">
                    {item.title || item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.category}
                  </p>
                </div>

                <p className="font-semibold text-orange-500">
                  ₹{item.price}
                </p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between mt-6 text-lg font-bold">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>

        {/* ✅ RIGHT SIDE - Features + Payment */}
        <div className="space-y-6">

          <div className="grid grid-cols-2 gap-4">

            <div className="p-4 border rounded-xl text-center shadow">
              <FaShippingFast className="text-3xl text-orange-500 mx-auto mb-2" />
              <p className="text-sm">Fast Delivery</p>
            </div>

            <div className="p-4 border rounded-xl text-center shadow">
              <FaHeadset className="text-3xl text-orange-500 mx-auto mb-2" />
              <p className="text-sm">24/7 Support</p>
            </div>

            <div className="p-4 border rounded-xl text-center shadow">
              <FaUndo className="text-3xl text-orange-500 mx-auto mb-2" />
              <p className="text-sm">Easy Returns</p>
            </div>

            <div className="p-4 border rounded-xl text-center shadow">
              <FaLock className="text-3xl text-orange-500 mx-auto mb-2" />
              <p className="text-sm">Secure Payment</p>
            </div>

          </div>
         

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={handlePayment}
              className="w-full bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700"
            >
              Pay ₹{totalPrice}
            </button>

            <button
              onClick={handleBack}
              className="w-full bg-red-500 text-white py-2 rounded-lg"
            >
              Back
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Process;



// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaShippingFast, FaHeadset, FaUndo, FaLock } from "react-icons/fa";

// const Process = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const product = location.state;

//     const handleBack = () => {
//         navigate(-1); // go back to Card page
//     };

//     const handlePayment = () => {
//         window.location.href =
//             "https://buy.stripe.com/test_7sY9AU0BncOU8jqc4A9fW00";
//     };

//     if (!product) {
//         return <h2 className="text-center mt-10">No Product Data</h2>;
//     }

//     return (
//         <div className="w-full max-w-screen-xl mx-auto px-4 py-10">
//             <h2 className="text-center text-3xl font-bold mb-6">
//                 Order Summary
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                 <div className="p-6 border rounded-xl shadow text-center">
//                     <FaShippingFast className="text-4xl text-orange-500 mx-auto mb-4" />
//                     <h3>Fast Delivery</h3>
//                 </div>

//                 <div className="p-6 border rounded-xl shadow text-center">
//                     <FaHeadset className="text-4xl text-orange-500 mx-auto mb-4" />
//                     <h3>24/7 Support</h3>
//                 </div>

//                 <div className="p-6 border rounded-xl shadow text-center">
//                     <FaUndo className="text-4xl text-orange-500 mx-auto mb-4" />
//                     <h3>Easy Returns</h3>
//                 </div>

//                 <div
//                     onClick={handlePayment}
//                     className="p-6 border rounded-xl shadow text-center cursor-pointer hover:bg-gray-100"
//                 >
//                     <FaLock className="text-4xl text-orange-500 mx-auto mb-4" />
//                     <h3>Payment Process</h3>
//                 </div>
//             </div>

//             <div className="text-center">
//                 <button
//                     onClick={handleBack}
//                     className="px-6 py-2 bg-red-500 text-white rounded"
//                 >
//                     Back
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Process;