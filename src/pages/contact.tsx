

function Contact() {
    return (
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-center text-4xl font-bold text-amber-900">
            Contact Us</h1>

        <p  className="mb-8 text-center text-gray-600">
            We'd love to here from you. Send us a message.</p>

        <div className=" grid gap-6 md:grid-cols-2">
            <div>
        <h2 className="mb-4  text-2xl font-semibold">
            Contact Information</h2>
         <div className="space-y-4">
        <p><span className="font-bold">🚏Address:</span>Yangon,Myanmar</p>

        <p><span className="font-bold">📞Phone:</span>09 123 456 789</p>

        <p><span className="font-bold">📧Email:</span> info@mysite.com</p>
        </div>
        </div>
        <form className="space-y-4">
        <input
         type="text"
         placeholder="Your Message"
         className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"></input>

         <textarea
           rows={5}
           placeholder="submit"
           className="w-full border rounded-lg focus:outlinne-none focus:ring-2 focus:ring-amber-500"></textarea>

        <button
         type="submit"
         className="rounded-lg bg-amber-600 w-full font-semibold hover:bg-amber-700 py-3 text-white"
         
         >Send Message</button>
         </form>
      </div>
      </div>
      </div>
    )
}

export default Contact;