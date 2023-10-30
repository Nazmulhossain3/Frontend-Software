
const Testomonial = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center p-20 gap-8">

            <div>
                <img className="w-12 h-12 ml-56 lg:mb-4 mb-6 md:ml-96 lg:ml-12" src="https://nxtide.com/wp-content/uploads/2022/04/Marcin-Welner.jpg" alt="" />
                <h1 className="text-xl font-semibold  text-center">Marcin Welner</h1>
                <h1 className=" text-xl font-semibold  text-center opacity-50">Technical Director,</h1>
                <p  className=" text-xl font-semibold  text-center opacity-50">Kitopi</p>
            </div>

            <div className="italic text-xl text-red-600">
                <h2>Pragmatic Coders pays attention to detail and understands the business domain correctly. They led us to a successful </h2>

                <h2 className="mt-4">launch of our product this year. We’re happy with the effects of their work. Our team is still using the platform and building on top of it.</h2>
            </div>
            
        </div>
    );
};

export default Testomonial;