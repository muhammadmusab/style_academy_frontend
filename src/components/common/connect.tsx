import React, { Fragment } from "react";

const Connect = () => {
  return (
    <Fragment>
      <h2 className="text-[20px] font-medium text-white mb-[24px]">
        Get Connected
      </h2>
      <div>
        <a
          href="mailto:styleacademy@gmail.com"
          className="text-white block mb-[10px]"
        >
          Email : styleacademy@gmail.com
        </a>
        <div className="text-white flex">
          <p>Whatsapp : </p>
          <div className="ml-[5px]">
            <p>03020301064</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Connect;
