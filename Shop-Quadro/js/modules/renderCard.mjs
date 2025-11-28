import products from "./products.mjs";



const createTagElemen = (tagName, className, content = "") => {
    const element = document.createElement(tagName);
    element.classList.add(className);
    if(content !== null && content !== undefined) {
        element.innerHtml = content;
        return element;
    }
    return element;
}

const renderCard = (product) => {
    const liElement = document.createElement("li");
    return liElement;
}

const renderCards = (products, productContainer) => {
    console.log(products, productContainer);

    products.array.forEach(product => {
        const card = renderCard(product);
        console.log("card", card);
        
    });
    
}

export {renderCard};

