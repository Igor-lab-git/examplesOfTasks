export class Model {
    constructor() {
        this.data = [];
    }

    async loadingData() {
        try {
            const response = await fetch("./data.json");
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            ;
            const products = await response.json();
            this.data = products;
        } catch (error) {
            console.error("Ошибка загрузки данных");
        }
        ;
    };

    sortingProducts(sortingValue) {
        const {sortType, sortCategory, sortOrder} = sortingValue; // вытягиваем клучи свойств в переменные

        let filterData = null;

        if (sortCategory !== "all") { // если в селекте не all, а такого не может быть при фильтрации и сортировки продуктов ведь какой то продукт относится к какой то группе, и не может например планшеты относится  к категории all
            filterData = this.data.filter((product) => { // если не all тогда в переменную записываем результат фильтрации продуктов по нашим категориям, на случай если мы не выбрали все продукты ну если не равно all
                return product.category === sortCategory; // возращаем совпадения по категориям, тоесть в category строга с названием категории и в выбранном селекте такие же строки с категориями и при совпадении фильтруется соответствующий массив товаров
            });
        } else {
            filterData = [...this.data]; // ну а вслучае если выбрали all разворачиваем весь старый массив в переменную
        }
        ;

        return filterData.sort((a, b) => { // и возвращаем массив фильтованных и отсортированных продуктов
            switch (sortType) { // и отследим за типом сортировки
                case "date": // если актуальное напровление сортировки равно как desc, тоесть выбранно сортировать по дате соритируем либо по возрастанию либо по убыванию
                    return sortOrder === "desc" ? Date.parse(a.date) - Date.parse(b.date) : Date.parse(b.date) - Date.parse(a.date); // парсим дату до опрелелённого числа и это число будет уникальным для каждой даты
                 break;
            };
        });
    };
};

//48