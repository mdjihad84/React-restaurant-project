const Footer = () => {
    return (
        <div className="flex flex-col md:flex-row justify-evenly mt-6 space-y-6 md:space-y-0">
            <div className="bg-gray-800 py-10 text-white text-center p-6 w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl mb-4">CONTACT US</h3>
                <p className="text-base md:text-xl mb-2">123 ABS Street, Uni 21, Bangladesh</p>
                <p className="text-base md:text-xl mb-2">+88 123456789</p>
                <p className="text-base md:text-xl mb-2">Mon - Fri: 08:00 - 22:00</p>
                <p className="text-base md:text-xl mb-2">Sat - Sun: 10:00 - 23:00</p>
            </div>

            <div className="bg-black py-10 text-white text-center py-6 pt-20 py-6 w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl mb-2">Follow Us</h3>
                <p className="mb-4 text-base md:text-xl">Join us on social media</p>
                <div className="inline-flex space-x-4 text-lg md:text-xl text-gray-400">
                    <i className="fa-brands fa-facebook-f hover:text-blue-600"></i>
                    <i className="fa-brands fa-instagram hover:text-pink-500"></i>
                    <i className="fa-brands fa-twitter hover:text-blue-400"></i>
                </div>
            </div>
        </div>
    );
};
export default Footer;
