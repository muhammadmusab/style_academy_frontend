import { Fragment } from "react";
const Shipping = () => {
  const addresses = [
    {
      id: "ff0e05dd-cbb2-4c81-8e3c-b5f42c9f7c0c",
      name: "Musab",
      default: true,
      address1: "Flat no 3, Block A2",
      address2: "Alrehman Appartment",
      city: "Hyderabad",
      country: "Pakistan",
      postalCode: "71000",
      phone: "03070301064",
    },
    {
      id: "0f1b532d-464e-426f-977f-0e05cbfdabe7",
      name: "Shumas",
      default: false,
      address1: "Flat no 4, Block A5",
      address2: "Alrehman Appartment",
      city: "Hyderabad",
      country: "Pakistan",
      postalCode: "71000",
      phone: "03483744640",
    },
  ];
  return (
    <div className="container-fluid w-[75%] sm:w-full">
      {addresses.map((item) => (
        <Fragment key={item.id}>
          <div className="mb-[20px] border border-[#ccc] p-[20px] flex justify-between items-center w-full flex-wrap">
            <div>
              <div>
                {item.default && (
                  <p className="bg-success text-white rounded-[5px] my-2 px-[5px] py-[2px] w-[max-content] text-[14px]">
                    Default
                  </p>
                )}
                <h5 className="font-bold mb-2">{item.name}</h5>
                <p className="mb-[5px]">{item.address1}</p>
                {item.address2 && <p className="mb-[5px]">{item.address2}</p>}
                <p className="mb-[5px]">{item.city}</p>
                <p className="mb-[5px]">{item.country}</p>
                <p className="mb-[5px]">{item.postalCode}</p>
                <p className="mb-[5px]">{item.phone}</p>
              </div>
              {item.default !== true && (
                <button className="mt-2 transition-all bg-primary font-roboto font-bold text-white py-4 px-[65px] md:px-[30px] hover:bg-primary-foreground">
                  SET AS DEFAULT
                </button>
              )}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default Shipping;
