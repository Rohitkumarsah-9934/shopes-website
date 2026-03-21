import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const productData = [
   { id: 1, title: "Backpack", price: 999, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500" },
  { id: 2, title: "Bluetooth Speaker", price: 2499, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500" },
  { id: 3, title: "Gaming Mouse", price: 999, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500" },
  { id: 4, title: "Keyboard", price: 1499, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500" },
  { id: 5, title: "LED Monitor", price: 8999, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500" },
  { id: 11, title: "Camera", price: 25999, image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=500" },
  { id: 12, title: "Power Bank", price: 1299, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500" },
  { id: 13, title: "Tablet", price: 18999, image: "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=500" },
  { id: 14, title: "Smart TV", price: 32999, image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500" },
  { id: 15, title: "Printer", price: 7499, image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=500" },
  { id: 16, title: "Router", price: 1999, image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=500" },
  { id: 17, title: "External Hard Drive", price: 5499, image: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=500" },
];

const NewProducts = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // ✅ Add
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ✅ Remove
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // ✅ Total
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h2 className="text-3xl font-bold text-center mb-10">
        New Products Items
      </h2>

      {/* ✅ Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productData.map((item) => (
          <div
            key={item.id}
            className="border rounded-2xl p-5 shadow-md hover:shadow-xl transition flex flex-col"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-xl"
            />

            <div className="mt-4 flex-grow">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item.category && (
                <p className="text-sm text-gray-500">{item.category}</p>
              )}
              {item.description && (
                <p className="text-gray-600 text-sm mt-1">
                  {item.description}
                </p>
              )}
              <p className="text-orange-600 font-bold text-lg mt-2">
                ₹{item.price}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => addToCart(item)}
                className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
              >
                Add
              </button>

              <button
                onClick={() => removeFromCart(item.id)}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Cart Section */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold mb-6">Cart Items</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border p-4 rounded-xl"
                >
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p>
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="text-right font-bold text-xl mt-6">
              Total: ₹{totalPrice}
            </div>

            <div className="text-center mt-6">
              <button
                onClick={() => navigate("/cart", { state: cart })}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Go To Cart ({cart.length})
              </button>
            </div>
          </>
        )}
      </div>

    </div>
  );
};

export default NewProducts;