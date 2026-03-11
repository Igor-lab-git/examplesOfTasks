import { makeAutoObservable } from "mobx";

export default class DeviceStore { 
    constructor () {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"},
            {id: 3, name: "Ноутбуки"},
            {id: 4, name: "Телевизоры"},
        ] // типы товаров

        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Lenovo"},
            {id: 4, name: "Asus"},
        ]

        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 2500, rating: 5, img: "https://cdn.fastcup.net/logos/teams/185965_89leafde2.webp"},
            {id: 2, name: "Iphone 12 pro", price: 2500, rating: 5, img: "https://cdn.fastcup.net/logos/teams/185965_89leafde2.webp"},
            {id: 3, name: "Iphone 12 pro", price: 2500, rating: 5, img: "https://cdn.fastcup.net/logos/teams/185965_89leafde2.webp"},
            {id: 4, name: "Iphone 12 pro", price: 2500, rating: 5, img: "https://cdn.fastcup.net/logos/teams/185965_89leafde2.webp"},
            {id: 5, name: "Iphone 12 pro", price: 2500, rating: 5, img: "https://cdn.fastcup.net/logos/teams/185965_89leafde2.webp"},
            {id: 6, name: "Iphone 12 pro", price: 2500, rating: 5, img: "https://cdn.fastcup.net/logos/teams/185965_89leafde2.webp"},
            {id: 7, name: "Iphone 12 pro", price: 2500, rating: 5, img: "https://cdn.fastcup.net/logos/teams/185965_89leafde2.webp"},
        ]
        this._selectedType = {} // выбранный тип
        this._selectedBrand = {} // выбранный бренд
        makeAutoObservable(this);
    } 
//Конструктор - место рождения данных
//Сеттеры (мутации) - как менять данные

// Это единственный способ менять данные!
// Как контроллер в телефоне: хотите громче - нажимаете кнопку, а не лезете внутрь
// Пример: deviceStore.setSelectedType({id: 1, name: "Холодильники"})
    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    // Геттеры (доступ к данным) - как читать данные

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

     get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }

//  Как читать данные, но не менять их
// В React компоненте пишем: store.devices и получаем массив
// Это как витрина магазина: видите товары, но не можете их трогать
}