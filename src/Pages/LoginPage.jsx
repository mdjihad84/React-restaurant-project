const Form = () => {
    return (
        <div>
            <div className="mx-auto mt-20 relative mb-20">
                <img src="/Images/LoginPage-bg.png" className="w-full h-[1146px]" alt="Latest News"/>
                <div className="">
                    <div className="absolute mx-auto ml-[36%] mt-[-65%]">
                        <p className="text-center text-xl font-normal italic text-[#D99904] mt-20">---Should Try---</p>
                        <hr className="w-[80%] sm:w-[360px] md:w-[424px] h-[4px] mx-auto mt-8 mb-4 bg-[#E8E8E8]" />
                        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl text-black">CHEF RECOMMENDS</h2>
                        <hr className="w-[80%] sm:w-[360px] md:w-[424px] h-[4px] mt-10 mb-8 bg-[#E8E8E8]" />
                    </div>
                    <div className="w-[1140px] h-[725px] shadow-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row items-center justify-center">
                        <div className="w-full md:w-[648px] h-[300px]">
                            <img src="/Images/LoginPage-hero.png" alt="Bistro Boss" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex items-center justify-center min-h-screen">
                            <div className="w-[400px] ml-8 max-w-md p-6 rounded-lg">
                                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                                <form className="mt-6">
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="email"> Email</label>
                                        <input type="email" id="email" className="bg-white w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder="Type here" required/>
                                    </div>                          
                                    <div className="mb-6">
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="password"> Password</label>
                                        <input type="password" id="password" className="bg-white w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder="Enter your password" required />
                                    </div>
                                    <div className="mb-6">
                                        <input type="text" id="text" className="bg-white w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder="U A g l u o " required />
                                    </div>
                                    <div className="mb-6">
                                        <input type="text" id="text" className="bg-white w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500" placeholder="Type here" required />
                                    </div>
                                    <button type="submit" className="bg-[#D1A054B2] w-full p-3 text-white bg-blue-600 rounded-md">Sing in</button>
                                </form>
                                <p className="mt-4 text-sm text-center text-gray-600">Don’t have an account? 
                                    <a href="/register" className="text-[#D1A054B2] hover:underline"> Sign up </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Form;
