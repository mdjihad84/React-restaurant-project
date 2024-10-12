const Product = () => {
    return (
        <div>
            <p className="text-center text-xl font-normal italic text-[#D99904] mt-20">---From 11:00am to 10:00pm---</p>
            <hr className="w-[424px] h-[4px] mx-auto mt-8 mb-4 bg-[#E8E8E8]"/>
            <hr className="w-[424px] h-[4px] mx-auto mt-10 mb-8 bg-[#E8E8E8]"/>
            <div className="flex flex-wrap justify-center mx-auto gap-10 w-full md:w-[1320px]">
                <img src="/Images/Product-img1.jpg" className="w-[300px] md:w-[300px] flex-shrink-0" alt="Product 1" />
                <img src="/Images/Product-img2.jpg" className="w-[300px] md:w-[300px] flex-shrink-0" alt="Product 2" />
                <img src="/Images/Product-img3.jpg" className="w-[300px] md:w-[300px] flex-shrink-0" alt="Product 3" />
                <img src="/Images/Product-img4.jpg" className="w-[300px] md:w-[300px] flex-shrink-0" alt="Product 4" />
            </div>
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
        </div>
    );
};
export default Product;
