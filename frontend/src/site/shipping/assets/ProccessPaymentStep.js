import React, { useEffect, useMemo, useState } from "react";
import { CheckoutStep } from "./CheckoutStep";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import { createOrder, clearErrors } from "../../../actions/OrderAction";
import CartEmty from "./CartEmty";
import { removeCartItem } from "../../../actions/cartAction";
import { Button, RadioGroup, Radio, FormControlLabel } from "@material-ui/core";

// import MetaData from "../../layout/metaData/MetaData";
import { useCallback } from "react";
import useRazorpay from "react-razorpay";
import { CREATE_ORDER_RESET } from "../../../constants/OrderConstants";
// import Loader from "../../layout/loader/Loader";
import { getCardPayments } from "../../../actions/Paymentaction";
import generateUuid from "../../../utils/Uuidv4";
import Loader from "../../../utils/loader/Loader";
// Loader
const ProccessPaymentStep = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo") || "[]");
  const {
    loading,
    order: NewCurrentOrder,
    error,
  } = useSelector((state) => state.newOrder);

  const alert = useAlert();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippinginfo, cartItem } = useSelector((state) => state.cart);
  const [payMode, setPayMode] = useState("COD");
  const [status, setStatus] = useState(false);

  const order = {
    shippinginfo,
    orderItem: cartItem,
    uuid: orderInfo.uuid,
    itemPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingChargs,
    coupon_uuid: orderInfo.coupon_uuid,
    totalPrice: orderInfo.totalPrice,
    coupon_discountamount: orderInfo.discountamount,
    coupon_code: orderInfo.coupon,
    coupon_discounttype: orderInfo.discounttype,
    coupon_discount: orderInfo.coupon_discount,
    totalQuantity: orderInfo.totalQuantity,
  };

  const orderHandler = async (payMode, order) => {
    order.shippinginfo.shipping_uuid = generateUuid();
    order.orderItem.orderItem_uuid = generateUuid();
    await dispatch(createOrder(order, payMode));

    if (payMode === "CARD") {
      handlePayment();
    } else {
    }
  };

  const [Razorpay] = useRazorpay();

  const handlePayment = useCallback(async () => {
    const orders = {
      shippinginfo,
      orderItem: cartItem,
      itemPrice: orderInfo.subtotal,
      taxPrice: orderInfo.tax,
      shippingPrice: orderInfo.shippingChargs,
      totalPrice: orderInfo.totalPrice,
    };
    const totalPrice = orders.totalPrice;

    const options = {
      key: "rzp_test_qEmBTt5Ssq87mn",
      amount: totalPrice * 100,
      currency: "INR",
      name: "Gurez",
      description: "Test Transaction",
      image:
        "https://gurez.com/wp-content/uploads/2023/04/GureZ-logo-1.png.webp",
      order_id: order.id,
      handler: (res) => {
        if (res && res.razorpay_payment_id) {
          cardPayments(res.razorpay_payment_id);
        }
      },
      prefill: {
        name: shippinginfo.fullName,
        email: shippinginfo.email,
        contact: shippinginfo.phoneNo,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
      modal: {
        ondismiss: () => {
          setPayMode("COD");
          cartItem.forEach((item) => {
            dispatch(removeCartItem(item.productId));
          });
        },
      },
      // Error Handling
      error_handler: (error) => {
        console.error('Payment failed:', error);
        // alert('Payment failed. Please try again.');
        // You can also perform other actions here like logging the error, updating the UI, etc.
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  //------------------------------------
  useMemo(() => {
    if (status && payMode === "COD") {
      codPayment();
    }
  }, [status, payMode]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (payMode === "COD") {
      if (NewCurrentOrder) {
        setStatus(true);
      }
    }
  }, [error, dispatch, payMode, alert, NewCurrentOrder]);

  function cardPayments(id) {
    console.log("yes");
    dispatch(getCardPayments(id, order, generateUuid()));
    setPayMode("COD");
  }

  function codPayment() {
    if (status && payMode === "COD") {
      Navigate(
        `/order/${NewCurrentOrder && NewCurrentOrder && NewCurrentOrder._id}`
      );

      dispatch({ type: CREATE_ORDER_RESET });
      setStatus(false);

      cartItem.forEach((item) => {
        dispatch(removeCartItem(item.productId));
      });
    }
  }
  return (
    <>
      {/* <MetaData
        title={"Payment Proccess"}
        content={"Payment Proccess"}
        keywords={"Payment Proccess"}
      /> */}
      <div className="stepper-main">
        <CheckoutStep activeStep={2} />
      </div>
      <section>
        <div id="pay-cont" className="cont-area-h">
          {loading ? (
            <Loader />
          ) : cartItem < 1 ? (
            <CartEmty />
          ) : (
            <>
              <div className="pay-cont">
                <div className="paytitle">
                  <h1>Payment Methods</h1>
                </div>
                <div className="payoption">
                  <div className="pay-cod">
                    <div className="pay-cod-opt">
                      <FormControlLabel
                        id="COD"
                        name="mode"
                        value="COD"
                        checked={payMode === "COD"}
                        label="Cash on delivery"
                        onClick={() => setPayMode("COD")}
                        control={<Radio />}
                      />
                    </div>
                    <p>
                      <b>Pay with cash upon delivery.</b>
                    </p>
                  </div>
                  <div className="pay-online">
                    <FormControlLabel
                      name="mode"
                      type="radio"
                      id="Online"
                      checked={payMode === "CARD"}
                      value="Online"
                      onClick={() => setPayMode("CARD")}
                      label="Credit Card/Debit Card/NetBanking"
                      control={<Radio />}
                    />
                  </div>
                </div>
              </div>
              {/* {payMode === 'CARD' ? (
                <>
                  <div className="pay-razor-btn">
                    <Button
                      style={{ maxWidth: "200px" }}
                      className="order button-success"
                      onClick={() => orderHandler(payMode, order)}
                    >
                      Place Order
                    </Button>
                  </div>
                </>
              ) : (
                <> */}
              <div className="pay-cod-btn">
                <div className="pay-razor-btn">
                  <Button
                    style={{ maxWidth: "200px" }}
                    className="order button-success"
                    onClick={() => orderHandler(payMode, order)}
                  >
                    Place Order
                  </Button>
                </div>
              </div>
              {/* </>
              )} */}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ProccessPaymentStep;
