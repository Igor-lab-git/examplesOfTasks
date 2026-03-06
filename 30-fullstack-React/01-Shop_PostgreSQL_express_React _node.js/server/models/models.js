import sequelize from '../db/db.js';
import { DataTypes, UniqueConstraintError } from 'sequelize';

const User = sequelize.define("user", {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique: true},
    password:{type: DataTypes.STRING},
    role:{type: DataTypes.STRING, defaultValue: "USER"},
}); //id - уникальный идентификатор, автоинкремент  email - уникальный email пользователя role - роль пользователя (по умолчанию "USER", вероятно есть "ADMIN")

const Basket = sequelize.define("basket", {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
}); //Простая модель-связка, содержит только id Связывает пользователя с товарами в корзине
 
const BasketDevice = sequelize.define("basket_device", {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
}); //Промежуточная таблица для связи корзины и товаров Позволяет хранить множество товаров в одной корзине

const Device = sequelize.define("device", {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique: true, allowNull: false},
    price:{type: DataTypes.INTEGER, allowNull: false},
    rating:{type: DataTypes.INTEGER, defaultValue: 0},
    img:{type: DataTypes.STRING, allowNull: false},
}); //name - название товара (уникальное) price - цена rating - рейтинг (по умолчанию 0) img - путь к изображению

const Type = sequelize.define("type", {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique: true, allowNull: false},
}); //Категория товара (например: "Смартфоны", "Ноутбуки") name - уникальное название типа

// Это просто работает с базой данных
// Type.findAll() // Выполняет SQL: SELECT * FROM types
// Возвращает данные, НО ничего не знает про HTTP, req, res

const Brand = sequelize.define("brand", {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique: true, allowNull: false},
}); //Производитель товара name - уникальное название бренда

const Rating = sequelize.define("rating", {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate:{type: DataTypes.STRING, unique: true, allowNull: false},
    // rate:{type: DataTypes.INTEGER, allowNull: false},
}); //Производитель товара  name - уникальное название бренда

const DeviceInfo = sequelize.define("device_info", {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, allowNull: false},
    description:{type: DataTypes.STRING, allowNull: false},
}); //title - название характеристики description - значение характеристики Позволяет хранить динамические характеристики для разных товаров

const TypeBrand = sequelize.define("type_brand", {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
}); //Промежуточная таблица для связи many-to-many между типами и брендами

User.hasOne(Basket); // У одного пользователя - одна корзина
Basket.belongsTo(User); // Корзина принадлежит пользователю

User.hasMany(Rating); // Пользователь может иметь много оценок
Rating.belongsTo(User); // Оценка принадлежит пользователю

Basket.hasMany(BasketDevice); // В корзине много товаров
BasketDevice.belongsTo(Basket); // Товар в корзине принадлежит конкретной корзине

Type.hasMany(Device);  // У типа может быть много товаров
Device.belongsTo(Type);  // Товар принадлежит одному типу

Brand.hasMany(Device); // У бренда может быть много товаров
Device.belongsTo(Brand); // Товар принадлежит одному бренду

Device.hasMany(Rating); // У товара может быть много оценок
Rating.belongsTo(Device); // Оценка относится к конкретному товару

Device.hasMany(BasketDevice);  //Товар может лежать в нескольких корзинах
BasketDevice.belongsTo(Device); // Запись в корзине относится к конкретному товару

Device.hasMany(DeviceInfo); // У товара может быть много характеристик
DeviceInfo.belongsTo(Device); // Характеристика относится к конкретному товару

Type.belongsToMany(Brand, {through: TypeBrand});
Brand.belongsToMany(Type, {through: TypeBrand});

export default {
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    DeviceInfo
};