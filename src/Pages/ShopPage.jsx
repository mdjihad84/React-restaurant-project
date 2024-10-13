import FooterSection from '../Components/FooterSection';
const Hero = () => {
  return (
    <div className="block">
     <div className="">
        <img className="w-full h-[300px] sm:h-[300px] md:h-[500px] lg:h-[700px] xl:h-[804px] bg-cover bg-center" style={{ backgroundImage: "url('/Images/Hero3.jpg')" }} aria-label="Hero image"/>
        <div className="w-[90%] md:w-[1096px] h-[300px] bg-black mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center z-40 opacity-90 justify-center">
           <div className="w-[90%] md:w-[740px] text-center">
              <h2 className="text-white mt-4 font-enter text-[88px]">OUR SHOP</h2>
              <p className="text-white mt-4 font-enter text-xl" >Would you like to try a dish?</p>
           </div>
        </div>
      </div>
      {/* Chef Recommends Section */}
      <div>
        <p className="text-center text-xl font-normal italic text-[#D99904] mt-20">---Should Try---</p>
        <hr className="w-[424px] h-[4px] mx-auto mt-8 mb-4 bg-[#E8E8E8]" />
        <h2 className="text-center text-4xl text-black">CHEF RECOMMENDS</h2>
        <hr className="w-[424px] h-[4px] mx-auto mt-10 mb-4 bg-[#E8E8E8]" />

        {/* Recommended Dishes */}
        {[1, 2, 3].map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row justify-center gap-10 mt-8">
            {["Slide1.jpg", "Slide1.jpg", "Slide1.jpg"].map((imgSrc, index) => (
              <div key={index} className="card w-full max-w-[350px] h-[541px] bg-[#F3F3F3]">
                <div>
                  <img src={`/Images/${imgSrc}`} className="w-full h-[300px] object-cover" alt="Recommended dish" />
                </div>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-black font-semibold text-2xl font-enter">Caeser Salad</h2>
                  <p className="text-black font-normal text-base font-enter">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                  <div className="card-actions">
                    <button className="btn bg-[#E8E8E8] border-b-2 text-xl border-none border-[#BB8506] text-[#BB8506]">add to cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <FooterSection />
    </div>
  );
};
export default Hero;
