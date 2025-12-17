export class Model {
    constructor() {
        this.data = []; // состояние с обсалютно всеми продуктами которые к нам прилетают с сервера
        this.filterData = []; // состояние для отфильтрованных продуктов, тоесть отображение продуктов бедет по состоянию filterData
    }

    async loadingData() {
        try {
            const response = await fetch("./data.json");
            if (!response.ok) {
                throw new Error(response.statusText);
            };
            const products = await response.json();
            this.data = products;
            this.filterData = [...this.data]; //  и копируем сюда массив для состоянию фильтраций продуктов
        } catch (error) {
            console.error("Ошибка загрузки данных");
        }
        ;
    };

    sortingProducts(sortingValue) {
        const {sortType, sortCategory, sortOrder} = sortingValue; // вытягиваем клучи свойств в переменные Сначала извлекаются три параметра, определяющие фильтрацию и сортировку

        let filterData; //Создается новый пустой массив (filterData), содержащий только те элементы исходного массива, которые относятся к выбранной категории

        if (sortCategory !== "all") { // если в селекте не all, а такого не может быть при фильтрации и сортировки продуктов ведь какой то продукт относится к какой то группе, и не может например планшеты относится  к категории all
            filterData = this.filterData.filter((product) => { // если не all тогда в переменную записываем результат фильтрации продуктов по нашим категориям, на случай если мы не выбрали все продукты ну если не равно all
                return product.category === sortCategory; // возращаем совпадения по категориям, тоесть в category строга с названием категории в объекте и в выбранном селекте такие же строки с категориями и при совпадении фильтруется соответствующий массив товаров
            }); // Например, если выбраны планшеты, будут оставлены только объекты с полем "category": "tablets"
        } else {
            filterData = [...this.filterData]; // ну а вслучае если выбрали all разворачиваем весь старый массив в переменную
        };

        return filterData.sort((a, b) => { // и возвращаем массив фильтрованных и отсортированных продуктов
            switch (sortType) { // и отследим за типом сортировки
                case "date": // если актуальное напровление сортировки равно как desc, тоесть выбранно сортировать по дате соритируем либо по возрастанию либо по убыванию
                    return sortOrder === "desc" ? Date.parse(a.date) - Date.parse(b.date) : Date.parse(b.date) - Date.parse(a.date); // парсим дату до опрелелённого числа и это число будет уникальным для каждой даты
                case "price": // если актуальное напровление сортировки равно как price, тоесть выбранно сортировать по цене соритируем либо по возрастанию либо по убыванию
                    return sortOrder === "desc" ? a.price - b.price : b.price - a.price; // парсим цену до опрелелённого числа и это число будет уникальным для каждой даты
                case "alphabet": // если актуальное напровление сортировки по алфовиту, тоесть выбранно сортировать 
                    const nameA = a.name.toLowerCase(); //для сравнения имён приводим к отному регистру
                    const nameB = b.name.toLowerCase();
                    if(sortOrder === "desc") { // если сортировка выбрана как по убыванию
                        if(nameA < nameB) { // то сравниваем строки и если  
                            return 1; // сортировка по будет по убыванию
                        } else if(nameA > nameB){
                            return -1; // сортировка по будет по возрастанию
                        } else {
                            return 0; // иначе строки совпадают
                        };
                    } else if(sortOrder === "asc") { // и наоборот
                        if(nameA > nameB) { 
                            return 1; 
                        } else if(nameA < nameB){
                            return -1; 
                        } else {
                            return 0;
                        };
                    };
                 break;
            };
        });
        
    };

    filterSearchInput(valueText) { // фильтрация по названию из input
        if(valueText === "") {  // и в теории после стерания текста в ingen мы в filterData копируем все продукты ...this.data, тем самым сбрасываем всю фильтрацию
            this.filterData = [...this.data]; // если пустая строка, в this.filterData  будем помещать обсолютно новый массив, тоесть фильтрации здесь не будет, как бы перепресваиваем
        } else {
            this.filterData = this.data.filter((product) => product.name.toLowerCase().includes(valueText)); // если нет,то находим все вхождения подстроки из названий всех продуктов
        };
    };

    resetFilterUIElements(sirtingDomElements) { // для обнуления слектов
        const { sortType, sortOrder, sortCategory } = sirtingDomElements; // достаём DOM элементы
        sortType.value = "date"; //  и устанавливаем в значение дефолтные состояния
        sortCategory.value = "all";
        sortOrder.value = "asc";
    };
};

//48
