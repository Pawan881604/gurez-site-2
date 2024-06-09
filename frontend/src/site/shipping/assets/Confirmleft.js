import React from "react";
import { useSelector } from "react-redux";
export const Confirmleft = () => {
  const { shippinginfo } = useSelector((state) => state.cart);

  return (
    <>
      <h2>Shipping info:</h2>
      <div className="shipping-info">
        <div className="h-us-info">
          <p>
            <span>Name:</span>
            <span>{shippinginfo.fullName}</span>
          </p>
          <p>
            <span>Email:</span>
            <span>{shippinginfo.email}</span>
          </p>
        </div>
        <div className="addrs-info">
          <p>
            <span>Address:</span>
            <span>{shippinginfo.address}</span>
          </p>
          <p>
            <span>City:</span>
            <span>{shippinginfo.city}</span>
          </p>
          <p>
            <span>Pin code:</span>
            <span>{shippinginfo.pinCode}</span>
          </p>
          <p>
            <span>State:</span>
            <span>{shippinginfo.state}</span>
          </p>
          <p>
            <span>Country:</span>
            <span>{shippinginfo.country}</span>
          </p>

          <p>
            <span>Phone number:</span>
            <span>{shippinginfo.phoneNo}</span>
          </p>
          {shippinginfo.gst_no && (
            <p>
              <span>GST number:</span>
              <span>{shippinginfo.gst_no}</span>
            </p>
          )}
          {shippinginfo.order_notes && (
            <p>
              <span>order_notes:</span>
              <span>{shippinginfo.order_notes}</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};
