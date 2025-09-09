"use client";

import { useEffect, useState } from "react";

export default function ProductSidebar({ category = "baby-diapers", limit = 14, title = "Top Products" }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch(`/api/products?category=${category}&limit=${limit}`);
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error("Failed to fetch products:", err);
            }
        }
        fetchProducts();
    }, [category, limit]);

    return (
        <aside className="sticky top-24 bg-gray-50 p-4 rounded-lg shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-orange-500">{title}</h3>
            {products.length === 0 ? (
                <p>Loading products...</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {products.slice(0, limit).map((product, idx) => (
                        <a
                            key={idx}
                            href={product.amazonUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer bg-white"
                        >
                            <div className="h-36 w-full flex items-center justify-center p-2 bg-white">
                                <img
                                    src={`/images/${product.image}`}
                                    alt={product.name}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                            <p className="text-sm mt-2 font-medium text-gray-700 text-center px-1 line-clamp-2">{product.name}</p>
                            <p className="text-xs text-center text-gray-500 mt-1">{product.price}</p>
                        </a>
                    ))}
                </div>
            )}
        </aside>
    );
}
