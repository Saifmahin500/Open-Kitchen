


const Banner = () => {
    return (
        <div>
            
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/F7Ycr3q/17821681-Food-Pattern-5-01.jpg)' }}>         
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/Wf77hx0/hero-banner.png" className="w-2/4 rounded-lg " />
                    <div>
                        <h1 className="text-xl font-bold">Open Kitchen!</h1>
                        <p className="text-5xl font-bold py-6">We Serve Special Branded <br /> <span className="text-[#d52a00]">Food</span> in town! </p>
                        <p className="text-xl py-6">Food is any substance consumed to provide nutritional support for an organism.</p>
                        <button className="btn bg-[#d52a00] font-bold" >Order Now</button> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;