import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Product Details',
};

interface IParams {
    productId: string;
    name: string;
    description: string;
};

const ProductIdPage = async ({params}: { params: Promise<IParams> }) => {
    const {productId} = await params;

    return (
        <div>
            <h1>ProductIdPage</h1>
            <h2>{productId}</h2>
        </div>
    )
};

export default ProductIdPage;
