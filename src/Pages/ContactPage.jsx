const Contact = () => {
    return (
        <div className="mx-auto mt-20 mb-2">
            <img src="/Images/Contact-hero.jpg" alt="Product 5" className="w-full" />
            <div className="w-[90%] md:w-[1096px] h-[300px] bg-black mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center z-40 opacity-90 justify-center">
                <div className="w-[90%] md:w-[740px] text-center">
                    <h2 className="text-white mt-4 font-enter text-[88px]">CONTACT US</h2>
                    <p className="text-white mt-4 font-enter text-xl">Would you like to try a dish?</p>
                </div>
            </div>
            <div className="">
                <div>
                    <p className="text-center text-lg sm:text-xl font-normal italic text-[#D99904] mt-10 sm:mt-20"> ---Check it out---</p>
                    <hr className="w-[90%] sm:w-[424px] h-[4px] mx-auto mt-4 sm:mt-8 mb-2 sm:mb-4 bg-[#E8E8E8]" />
                    <h2 className="text-center text-2xl sm:text-4xl text-black">CONTACT FORM</h2>
                    <hr className="w-[90%] sm:w-[424px] h-[4px] mx-auto mt-6 sm:mt-10 mb-4 sm:mb-8 bg-[#E8E8E8]" />
                </div>
                <form action="/" className="bg-[#F3F3F3] w-[60rem] mx-auto p-8 shadow-md rounded-md mt-8 mb-16">
                    <div className="flex gap-4">
                        <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-md bg-white mt-8" />
                        <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md bg-white mt-8" />
                    </div>
                    <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md bg-white mt-8" />
                    <textarea placeholder="Message" rows="4" className="w-full p-3 border border-gray-300 rounded-md bg-white mt-8"></textarea>
                    <div className="flex items-center mt-8">
                        <input type="checkbox" id="not-a-robot" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-0" />
                        <label htmlFor="not-a-robot" className="ml-2 text-gray-700 text-sm">I am not a robot</label>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button type="submit" className="bg-[#D1A054B2] w-40 p-3 text-white rounded-md">Sign in</button>
                    </div>
                </form>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly mt-6 space-y-6 md:space-y-0">
                <div className="bg-gray-800 py-10 text-white text-center p-6 w-full md:w-1/2">
                    <h3 className="text-2xl md:text-3xl mb-4">CONTACT US</h3>
                    <p className="text-base md:text-xl mb-2">123 ABS Street, Uni 21, Bangladesh</p>
                    <p className="text-base md:text-xl mb-2">+88 123456789</p>
                    <p className="text-base md:text-xl mb-2">Mon - Fri: 08:00 - 22:00</p>
                    <p className="text-base md:text-xl mb-2">Sat - Sun: 10:00 - 23:00</p>
                </div>

                <div className="bg-black py-10 text-white text-center w-full md:w-1/2">
                    <h3 className="text-2xl md:text-3xl mb-2">Follow Us</h3>
                    <p className="mb-4 text-base md:text-xl">Join us on social media</p>
                    <div className="inline-flex space-x-4 text-lg md:text-xl text-gray-400">
                        <i className="fa-brands fa-facebook-f hover:text-blue-600"></i>
                        <i className="fa-brands fa-instagram hover:text-pink-500"></i>
                        <i className="fa-brands fa-twitter hover:text-blue-400"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
