
const Identification = () => {
    return (
        <div>
          <p className="p-12 text-center font-bold text-4xl mt-24">Rewriting the rules of an IT outsourcing market. That’s who we are!</p>

          {/* founder Identification */}

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-12 px-20 gap-10">

            <div className="text-2xl">
                <h2 className="font-semibold">One company – two brands</h2>
                <h2 className="mt-4 opacity-60">My name is Marcin and I’m the founder of the <span className="text-red-600">Innovision Labs</span>, a very specialized brand of a much bigger company – <span className="text-red-600">Pragmatic Coders</span> (which we manage together with my friend and co-founder – Wiktor Żołnowski).At this point, you may ask, why a single software development company has two different brands? I’ll try to answer by telling you our story.</h2>
            </div>

            <img src="https://nxtide.com/wp-content/uploads/2021/12/9Y4A1935-1024x683.jpg" alt="" />
          </div>

         {/* Our another brach  Pragmatic Coders identification */}

         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-12 px-20 gap-16 mt-8">
            <img src="https://nxtide.com/wp-content/uploads/2022/03/9Y4A2304-1024x683.jpg" alt="" />

            <div className="text-2xl">
                <h2 className="font-semibold">The rise of Pragmatic Coders</h2>
                <h2 className="mt-4 opacity-60">Our joint adventure with Pragmatic Coders started about 8 years ago after providing advanced <span className="text-red-600">Scrum training</span> by Wiktor for a French / Polish company – WebInterpret. The client simply asked us if we could help him to find a <span className="text-red-600">software house that</span> does what was just said. Instead of recommending someone, we decided to establish our own software development company.</h2>
            </div>



         </div>

            
        </div>
    );
};

export default Identification;