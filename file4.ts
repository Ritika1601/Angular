class item
{
    id:number;
    name:string;
    price:number;
    category:string;
    constructor(id:number,name:string,price:number,category:string)
    {
        this.id=id;
        this.name=name;
        this.price=price;
        this.category=category;
    }

}
let Items = new item(1,"abc",100,"abc");
let detail = item =>
{
    console.log(items.id + " "+ items.name + " "+ items.price + " " + items.category);
}
detail(Items);