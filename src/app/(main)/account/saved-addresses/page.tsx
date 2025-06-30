import { Fragment } from "react";
import AddEditAddress from "@/components/pages/account/profile/add-edit-address";
const SavedAddresses = () => {
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
    <Fragment>
      <div className="flex justify-between mb-4 sm:flex-col">
        <h4 className="font-bold sm:mb-[10px]">Saved Addresses</h4>
        <AddEditAddress
          mode="add"
          triggerButtonClass="!w-[200px] !mt-0 sm:!w-full"
        />
      </div>
      {addresses.map((item) => (
        <div
          key={item.id}
          className="mb-[20px] border border-[#ccc] w-[100%] p-[20px] flex justify-between items-center sm:flex-col sm:items-start"
        >
          <div>
            {item.default ? (
              <p className="bg-success text-white rounded-[5px] my-2 px-[15px] py-[4px] w-[max-content] text-[14px]">
                Default
              </p>
            ) : (
              <button className="mb-4 transition-all bg-primary font-roboto font-bold text-white my-2 px-[15px] py-[4px] w-[max-content] hover:bg-primaryhover">
                Make Default
              </button>
            )}
            <h5 className="font-bold mb-2">{item.name}</h5>
            <p className="mb-[5px]">{item.address1}</p>
            {item.address2 && <p className="mb-[5px]">{item.address2}</p>}
            <p className="mb-[5px]">{item.city}</p>
            <p className="mb-[5px]">{item.country}</p>
            <p className="mb-[5px]">{item.postalCode}</p>
            <p className="mb-[5px]">{item.phone}</p>
          </div>
          <div className="flex flex-col sm:w-full sm:mt-[20px]">
            <button className="mb-2 transition-all bg-primary font-roboto font-bold text-white py-4 px-[65px] md:px-[30px] hover:bg-primaryhover">
              REMOVE
            </button>
            <AddEditAddress mode="edit" />
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default SavedAddresses;
