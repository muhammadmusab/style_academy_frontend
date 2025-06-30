import React from "react";

const DeliveryReturn = () => {
  return (
    <div className="">
      <h1 className="text-secondaryhover text-[20px] font-bold ">
        Our parcel courier service
      </h1>
      <p className="text-primaryhover my-[10px]">
        Lumia is proud to offer an exceptional international parcel shipping
        service. It is straightforward and very easy to organise international
        parcel shipping. Our customer service team works around the clock to
        make sure that you receive high quality courier service from start to
        finish.
      </p>
      <hr className="my-[20px] bg-primary"/>
      <div className=""></div>
      <h2 className="text-primary text-[20px] font-bold">Shipping Time</h2>
      <p className="font-bold text-primary my-[20px]">The shipping time is based on the shipping method you chose.</p>
      <p className="my-[5px] text-primaryhover">EMS takes about 5-10 working days for delivery.</p>
      <p className="my-[5px] text-primaryhover">DHL takes about 2-5 working days for delivery.</p>
      <p className="my-[5px] text-primaryhover">DPEX takes about 2-8 working days for delivery.</p>
    </div>
  );
};

export default DeliveryReturn;
