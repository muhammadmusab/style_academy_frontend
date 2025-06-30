import React from "react";

const page = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <h4>Your Order has been confirmed</h4>
      <p>
        You can track your order on <link href="/track-order">Track Order</link>{" "}
        page
      </p>
    </div>
  );
};

export default page;
