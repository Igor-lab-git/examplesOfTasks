import React from 'react';

interface IParams {
    slug: string
}

const BlogPage = async ({params}: { params: Promise<IParams> }) => {
    const {slug} = await params;

    console.log(params)

    return (
        <>
            <div>BlogPage</div>
            <h2>{slug}</h2>
        </>
    )
};
export default BlogPage;
