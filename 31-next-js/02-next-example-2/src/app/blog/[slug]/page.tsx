import React from 'react';

interface IParams {
    slug: string
}

const SlugPage = async ({params}: { params: Promise<IParams> }) => {
    const {slug} = await params;

    console.log(params)
    return (
        <div>SlugPage</div>
    )
};

export default SlugPage;
