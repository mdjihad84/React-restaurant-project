const Menu = () => {
  return (
    <div className="block">
      <div>
        <img className="w-full h-[300px] sm:h-[300px] md:h-[500px] lg:h-[700px] xl:h-[804px] bg-cover bg-center" style={{ backgroundImage: "url('/Images/Hero2.jpg')" }} aria-label="Hero image"/>
        <div className="w-[90%] md:w-[1096px] h-[300px] bg-black mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center z-40 opacity-90 justify-center">
           <div className="w-[90%] md:w-[740px] text-center">
              <h2 className="text-white mt-4 font-enter text-[32px] sm:text-[56px] md:text-[88px]">OUR MENU</h2>
              <p className="text-white mt-4 font-enter text-xl" >Would you like to try a dish?</p>
           </div>
        </div>
      </div>
      <img className="mx-auto mt-2" src="/Images/Food.jpg" alt="Delicious Food" loading="lazy" />
      <div className="px-4 sm:px-0">
        <div>
          <p className="text-center text-lg sm:text-xl font-normal italic text-[#D99904] mt-10 sm:mt-20">---Check it out---</p>
          <hr className="w-[90%] sm:w-[424px] h-[4px] mx-auto mt-4 sm:mt-8 mb-2 sm:mb-4 bg-[#E8E8E8]" />
          <h2 className="text-center text-2xl sm:text-4xl text-black">FROM OUR MEN</h2>
          <hr className="w-[90%] sm:w-[424px] h-[4px] mx-auto mt-6 sm:mt-10 mb-4 sm:mb-8 bg-[#E8E8E8]" />
        </div>

        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center">
          {[...Array(4)].map((_, index) => (
            <MenuItem key={index} />
          ))}
        </div>

        <div>
          <h4 className="text-center text-lg sm:text-xl text-[#1F2937] font-normal mt-4">View Full Menu</h4>
        </div>
      </div>

      {/* Bistro Section */}
      {[...Array(4)].map((_, index) => (
        <BistroSection key={index} />
      ))}

      {/* Footer */}
      <Footer />
    </div>
  );
};

const MenuItem = () => (
  <div className="w-full sm:w-[525px] mx-4 lg:ml-10 mb-8 flex">
      <div className="flex-shrink-0 bg-[#D9D9D9] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] w-[90px] h-[80px] sm:w-[118px] sm:h-[104px] mr-4 sm:mr-6"></div>
      <div className="flex-1">
          <div className="flex items-center justify-between">
              <h4 className="text-[#737373] text-lg sm:text-xl mt-2 sm:mt-4">
                  FISH PARMENTIER
              </h4>
              <p className="text-[#BB8506] text-lg sm:text-xl">$14.5</p>
          </div>
          <p className="text-[#737373] text-sm sm:text-base mt-1 sm:mt-2">
              Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce
          </p>
      </div>
  </div>
);

const BistroSection = () => (
  <div className="w-full md:w-[1320px] mx-auto mt-20 relative mb-20">
      <img src="/Images/Product-img5.jpg" alt="Product 5" className="w-full h-auto" />
      <div className="w-[90%] md:w-[1096px] h-[300px] bg-white mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <div className="w-[90%] md:w-[740px] text-center">
              <h3 className="text-4xl font-normal text-black">Bistro Boss</h3>
              <p className="text-black mt-4 font-enter">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
                  libero accusamus laborum deserunt ratione dolor officiis praesentium!
                  Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt
                  quibusdam nemo.
              </p>
          </div>
      </div>
  </div>
);

const Footer = () => (
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
);
export default Menu;

