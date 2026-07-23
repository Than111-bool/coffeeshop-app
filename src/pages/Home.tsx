import heroImage from "../assets/coffeeHouse.jpg";

function Home() {
  return (
    <section className="min-h-screen bg-amber-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-16 md:flex-row">

        
        <div className="md:w-1/2">
          <h1 className="mb-6 text-6xl text-bold font-bold text-amber-900">
            Welcome to <br />
            Coffee Shop ☕
          </h1>

          <p className="mb-6 text-lg leading-8 text-gray-700">
            Start your day with a cup of freshly brewed coffee.
            We serve premium coffee made from carefully selected beans
            to give you the best taste every day.
          </p>

          <button className="rounded-lg bg-amber-900 px-6 py-3 text-white transition hover:bg-amber-800">
            Order Now
          </button>
        </div>

        
        <div className="mt-10 md:mt-0 md:w-1/2">
          <img
            src={heroImage}
            alt="Coffee"
            className="w-full rounded-2xl shadow-xl"
          />
        </div>

      </div>

      
      <div className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-3">

        <div className="rounded-xl bg-white p-6 text-center shadow-lg">
          <h2 className="mb-2 text-2xl font-bold text-amber-900">
            ☕ Fresh Coffee
          </h2>
          <p className="text-gray-600">
            Brewed fresh every day with premium coffee beans.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 text-center shadow-lg">
          <h2 className="mb-2 text-2xl font-bold text-amber-900">
            🍰 Delicious Snacks
          </h2>
          <p className="text-gray-600">
            Enjoy cakes, cookies, and pastries with your coffee.
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 text-center shadow-lg">
          <h2 className="mb-2 text-2xl font-bold text-amber-900">
            ❤️ Cozy Place
          </h2>
          <p className="text-gray-600">
            Relax, work, or meet friends in a warm atmosphere.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Home;