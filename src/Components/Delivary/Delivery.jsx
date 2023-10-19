

const Delivery = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div style={{ backgroundImage: 'url(https://i.ibb.co/NY1s9fd/delivery-banner-bg.png)' }}>
          <img src="https://i.ibb.co/bJYysk3/4424568-2372102-removebg-preview.png" className="max-w-xl " />
          </div>
          <div>
            <h1 className="text-5xl font-bold">A Moments Of Delivered On <span className="text-[#f9c03b]">Right Time</span> & Place</h1>
            <p className="py-6">The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families.</p>
            <button className="btn bg-[#f9c03b] font-bold">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default Delivery;