import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

const LazyLoadImages = ({ product }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the loading once
    rootMargin: "200px 0px", // Adjust the root margin based on your needs
  });
  //----------------------------------------------------
  
  const imageRef = useRef(null);
  return (
    <>
      <div className="img-cont" ref={ref}>
        {inView ? (
          <>
            <div ref={imageRef}>
              <img
                src={product && product}
                alt={product ? product.altText : "avatar"}
              />
            </div>
          </>
        ) : (
          <div id="homepage" className="prod-collem">
            <div className="item">
              <div className="animated-background image-box"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default LazyLoadImages;
