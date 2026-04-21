import React from 'react';
import Link from "next/link";

interface IParams {
    slug: string
}

const ProductsPage = async ({params}: { params: Promise<IParams> }) => {
    const {slug} = await params;

    const products = [
        {id: 1, name: "Milk", description: "Next.js 15 Tutorial - 7 - Dynamic Routes"},
        {id: 2, name: "bread", description: "Next.js 15 Tutorial - 7 - Dynamic Routes"},
        {id: 3, name: "coffee", description: "Next.js 15 Tutorial - 7 - Dynamic Routes"},
        {id: 4, name: "tea", description: "Next.js 15 Tutorial - 7 - Dynamic Routes"},

    ];

    return (
        <>
            <h2>ProductsPage</h2>
            <ul style={{ listStyleType: "none", display: "flex", columnGap: "10px", color: "blue" }}>
                {products.map(({id, name, description}) => (
                    <Link key={id} href={`/products/${name}`}>
                        <span>{name}</span>
                    </Link>
                ))}
            </ul>
        </>
    )
};
export default ProductsPage;
