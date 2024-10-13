
const Contact = () => {
    return (
        <div className="md:w-[1320px] mx-auto mt-20 relative mb-20">
                <img src="/Images/Contact-hero.jpg" alt="Product 5" className="w-full" />
                <div className="w-[90%] md:w-[1096px] h-[300px] bg-black mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center z-40 opacity-90 justify-center">
                    <div className="w-[90%] md:w-[740px] text-center">
                        <h2 className="text-white mt-4 font-enter text-[88px]">CONTACT US</h2>
                        <p className="text-white mt-4 font-enter text-xl" >Would you like to try a dish?</p>
                    </div>
                </div>
            </div>
    );
};

export default Contact;