import React from 'react';
import CategorySongs from "@/widgets/category-songs/CategorySongs";

interface ICategoryPage {
    params: Promise<{ category: string }>
}

const CategoryPage = async ({params}: ICategoryPage) => {
    const category = (await params).category;
    console.log(category);

    return (
        <div>
            CategoryPage: {category}
            <CategorySongs />
        </div>
    )
};

export default CategoryPage;

