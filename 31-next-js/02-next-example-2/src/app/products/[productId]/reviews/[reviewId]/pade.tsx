import React from 'react';

interface IParams {
    slug: string;
    productId: string;
    reviewId: string;
}

const ProductsPage = async ({params}: { params: Promise<IParams> }) => {
    const { productId, reviewId } = await params;

    return (
        <>
            <h2>ProductsPage</h2>
            <h1>Review {productId} {reviewId} </h1>
        </>
    )
};
export default ProductsPage;