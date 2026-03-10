import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor () {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфоны"}
        ]
        this._brands = [
            {id: 1, name: "Iphone 12 pro", price: 2500, reting: 5, img: ""},
            {id: 2, name: "Iphone 12 pro", price: 2500, reting: 5, img: ""},
            {id: 3, name: "Iphone 12 pro", price: 2500, reting: 5, img: ""},
            {id: 4, name: "Iphone 12 pro", price: 2500, reting: 5, img: ""},
            {id: 5, name: "Apple"}        ]
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

     get devices() {
        return this._idevices
    }
}