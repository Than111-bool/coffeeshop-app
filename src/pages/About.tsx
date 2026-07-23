import aboutImg from "../assets/coffee.jpg";

function About () {
    return(
        <section className="min-h-screen bg-amber-50 py-16">
            <div className=" mx-auto flex flex-col max-w-6xl items-center gap-10 px-6 md:flex-row">
            <div className=" md:w-1/2">
                <img
                src={aboutImg}
                alt="Coffee Shop"
                className="w-full rounded-2xl shadow-xl"/>
            </div>
     <div className="md:w-1/2">
        <h1 className="mb-4 font-bold text-4xl text-amber-900">
            About Our Coffee Shop</h1>
        <p className="text-lg leading-8 text-gray-700">Our Coffee Shop was founded with one simple gold:to serve fresh
            , high-quality coffee in a warn and welcoming environment.
        </p>
        <p className="mb-4 leaing-8 text-lg text-gray-700">We carefully select premium coffee beans from trusted farms and prepare every cup
            with passion. Whether you enjoy Espresso , Latte , Cappuccino , or Cold Brew,
            we have something special for everyone.
        </p>
        <p className="mb-6 leading-8 text-bold text-3xl text-gray-700">
            Thank you for choosing us. We look forward to serving  you your next perfect cup of coffee.
            </p>
        <button
        className="rounded-lg bg-amber-900 px-6 py-3 text-white transition hover:bg-amber-800">
            Learn More</button>
        </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        
        <div className="rounded-xl bg-white p-6 text-center shadow-lg">
          <h2 className="mb-2 text-2xl font-bold text-amber-900">
            ☕ Premium Coffee
          </h2>
          <p className="text-gray-600">
            Fresh beans selected from the best coffee farms.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 text-center shadow-lg">
          <h2 className="mb-2 text-2xl font-bold text-amber-900">
            👨‍🍳 Expert Baristas
          </h2>
          <p className="text-gray-600">
            Every drink is prepared by experienced baristas.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 text-center shadow-lg">
          <h2 className="mb-2 text-2xl font-bold text-amber-900">
            ❤️ Friendly Service
          </h2>
          <p className="text-gray-600">
            We make every customer feel welcome and comfortable.
          </p>
        </div>

      </div>
        </section>
    )
}

export default About;