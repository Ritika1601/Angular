var item = /** @class */ (function () {
    function item(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    return item;
}());
var Items = new item(1, "abc", 100, "abc");
var detail = function (item) {
    console.log(item.id + " " + item.name + " " + item.price + " " + item.category);
};
detail(Items);
