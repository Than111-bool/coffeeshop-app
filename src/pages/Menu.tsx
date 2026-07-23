import espresso from "../assets/espresso.jpg";
import latte from "../assets/latte.jpg";
import cappuccino from "../assets/cappuccino.jpg";
import icecoffee from "../assets/icecoffee.jpg";
import Matcha from"../assets/Matcha.jpg";

function Menu (){
    const menuItem = [
        {
            id:1,
            name:"Espresso",
            price:"4,000 MMK",
            Image:espresso,
        },{
            id :2,
            name:"latte",
            price:"5,500 MMK",
            Image:latte,

        },{
            id:3,
            name:"Cappuccino",
            Image:cappuccino,
            price:"5,000 MMK",
        },{
            id :4,
            name:"Icecoffee",
            price:"5,000 MMK",
            Image :icecoffee,
        },{
            id:5,
            name:"Matcha",
            price:"5,500 MMK",
            Image:Matcha,
        }
    ]
    return (
        <div className="min-h-screen bg-amber-50 py-10">
            <h1 className="mb-10 text-center font-bold text-4xl text-amber-900">Our Coffee Menu</h1>
            <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
                {menuItem.map((item)=>(
                    <div
                    key={item.id}
                    className="overflow-hidden rounded-xl bg-white shodow-lg transtaion hover:scale-105">
                        <img
                        src={item.Image}
                        alt={item.name}
                        className="w-full h-56 object-cover"/>
                    <div><h2 className="text-2xl font-bold">{item.name}</h2>
                    <p className="mt-3 text-xl font-semibold text-amber-700">{item.price}</p>
                    <button className="mt-5  w-full rounded-lg bg-amber-900 py-2 text-white hover:bg-amber-800 cursor-pointer">Order Now</button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu;