import React from "react";
import {
    ShoppingBag,
    Trash2,
    Plus,
    Minus,
    ArrowLeft,
    ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, setCartItems }) => {

    // Increase quantity
    const increaseQuantity = (id) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    // Decrease quantity
    const decreaseQuantity = (id) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    // Remove item
    const removeItem = (id) => {
        setCartItems((items) =>
            items.filter((item) => item.id !== id)
        );
    };

    // Calculate subtotal
    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // Shipping
    const shipping = subtotal > 0 ? 10 : 0;

    // Total
    const total = subtotal + shipping;

    return (
        <section className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-10 py-10 md:py-16">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-10">

                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-green-400 transition mb-6"
                    >
                        <ArrowLeft size={18} />
                        Continue Shopping
                    </Link>

                    <div className="flex items-center gap-3">
                        <ShoppingBag
                            size={30}
                            className="text-green-400"
                        />

                        <h1 className="text-3xl md:text-5xl font-black tracking-tight">
                            YOUR CART
                        </h1>
                    </div>

                    <p className="text-gray-500 mt-2">
                        {cartItems.length} item
                        {cartItems.length !== 1 ? "s" : ""} in your bag
                    </p>
                </div>


                {/* Empty Cart */}
                {cartItems.length === 0 ? (

                    <div className="min-h-[50vh] flex flex-col justify-center items-center text-center">

                        <div className="w-24 h-24 rounded-full bg-gray-900 flex items-center justify-center mb-6">
                            <ShoppingBag
                                size={40}
                                className="text-gray-500"
                            />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold mb-3">
                            Your cart is empty
                        </h2>

                        <p className="text-gray-500 mb-7">
                            Looks like you haven't added anything yet.
                        </p>

                        <Link
                            to="/shop"
                            className="bg-green-400 text-black px-7 py-3 rounded-full font-bold hover:bg-green-300 transition"
                        >
                            SHOP NPG
                        </Link>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Cart Products */}
                        <div className="lg:col-span-2 space-y-5">

                            {cartItems.map((item) => (

                                <div
                                    key={item.id}
                                    className="bg-[#111111] border border-gray-800 rounded-2xl p-4 sm:p-5"
                                >

                                    <div className="flex gap-4 sm:gap-6">

                                        {/* Product Image */}
                                        <div className="w-28 h-32 sm:w-40 sm:h-44 bg-gray-900 rounded-xl overflow-hidden flex-shrink-0">

                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />

                                        </div>


                                        {/* Product Details */}
                                        <div className="flex-1 flex flex-col">

                                            <div className="flex justify-between gap-3">

                                                <div>

                                                    <p className="text-xs text-green-400 uppercase tracking-widest mb-1">
                                                        NPG
                                                    </p>

                                                    <h2 className="text-lg sm:text-xl font-bold">
                                                        {item.name}
                                                    </h2>

                                                    {item.size && (
                                                        <p className="text-sm text-gray-500 mt-2">
                                                            Size:{" "}
                                                            <span className="text-white">
                                                                {item.size}
                                                            </span>
                                                        </p>
                                                    )}

                                                </div>


                                                {/* Remove */}
                                                <button
                                                    onClick={() =>
                                                        removeItem(item.id)
                                                    }
                                                    className="text-gray-500 hover:text-red-500 transition"
                                                    title="Remove item"
                                                >
                                                    <Trash2 size={19} />
                                                </button>

                                            </div>


                                            {/* Bottom */}
                                            <div className="mt-auto pt-5 flex items-center justify-between">

                                                {/* Quantity */}
                                                <div className="flex items-center border border-gray-700 rounded-full">

                                                    <button
                                                        onClick={() =>
                                                            decreaseQuantity(item.id)
                                                        }
                                                        className="w-9 h-9 flex items-center justify-center hover:text-green-400 transition"
                                                    >
                                                        <Minus size={15} />
                                                    </button>

                                                    <span className="w-8 text-center font-semibold">
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            increaseQuantity(item.id)
                                                        }
                                                        className="w-9 h-9 flex items-center justify-center hover:text-green-400 transition"
                                                    >
                                                        <Plus size={15} />
                                                    </button>

                                                </div>


                                                {/* Price */}
                                                <p className="font-bold text-lg">
                                                    $
                                                    {(
                                                        item.price *
                                                        item.quantity
                                                    ).toFixed(2)}
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>


                        {/* Order Summary */}
                        <div className="lg:col-span-1">

                            <div className="bg-[#111111] border border-gray-800 rounded-2xl p-6 sticky top-24">

                                <h2 className="text-xl font-bold mb-6">
                                    ORDER SUMMARY
                                </h2>


                                {/* Subtotal */}
                                <div className="flex justify-between text-gray-400 mb-4">
                                    <span>Subtotal</span>

                                    <span className="text-white">
                                        ${subtotal.toFixed(2)}
                                    </span>
                                </div>


                                {/* Shipping */}
                                <div className="flex justify-between text-gray-400 mb-6">
                                    <span>Shipping</span>

                                    <span className="text-white">
                                        ${shipping.toFixed(2)}
                                    </span>
                                </div>


                                <div className="border-t border-gray-800 pt-5 mb-6">

                                    <div className="flex justify-between">

                                        <span className="text-lg font-bold">
                                            Total
                                        </span>

                                        <span className="text-2xl font-black text-green-400">
                                            ${total.toFixed(2)}
                                        </span>

                                    </div>

                                </div>


                                {/* Checkout */}
                                <button
                                    className="w-full bg-green-400 text-black py-4 rounded-full font-black hover:bg-green-300 transition"
                                >
                                    CHECKOUT
                                </button>


                                {/* Security */}
                                <div className="flex items-center justify-center gap-2 text-gray-500 text-xs mt-5">

                                    <ShieldCheck size={15} />

                                    <span>
                                        Secure checkout
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                )}

            </div>

        </section>
    );
};

export default Cart;