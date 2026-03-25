import phonesIcon from "../assets/icons/CategoryDevice/cards-link/phones.svg";
import laptopsIcon from "../assets/icons/CategoryDevice/cards-link/laptops.svg";
import tvIcon from "../assets/icons/CategoryDevice/cards-link/tv.svg";
import smartWatchesIcon from "../assets/icons/CategoryDevice/cards-link/smart-watches.svg";
import refrigeratorsIcon from "../assets/icons/CategoryDevice/cards-link/refrigerators.svg";
import tabletsIcon from "../assets/icons/CategoryDevice/cards-link/tablets.svg";
import dinamikIcon from "../assets/icons/CategoryDevice/cards-link/dinamik.svg";

const getIconByCategoryName = (name: string) => {
    const lowarName = name.toLowerCase();

    if(lowarName.includes("смартфоны") || lowarName.includes("phones")) {
        return phonesIcon;
    };

    if(lowarName.includes("ноутбуки") || lowarName.includes("laptops")) {
        return laptopsIcon;
    };

    if(lowarName.includes("телевизоры") || lowarName.includes("tv")) {
        return tvIcon;
    };

    if(lowarName.includes("смарт часы") || lowarName.includes("smart-watches")) {
        return smartWatchesIcon;
    };

    if(lowarName.includes("холодильники") || lowarName.includes("refrigerators")) {
        return refrigeratorsIcon;
    };

    if(lowarName.includes("планшеты") || lowarName.includes("tablets")) {
        return tabletsIcon;
    };

    if(lowarName.includes("колонки") || lowarName.includes("dinamik")) {
        return dinamikIcon;
    };
};

export default getIconByCategoryName;