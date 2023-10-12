import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} dots={null}>
      <div>
        <div style={{ border: "1px solid white" }}>
          <div
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              border: "1px solid gray",
            }}
          >
            <img
              src="https://ca-times.brightspotcdn.com/dims4/default/209c613/2147483647/strip/true/crop/3560x2373+136+0/resize/2000x1333!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F1a%2Fd7%2F9565d6894955b74bc735b6261a8a%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1499013102"
              alt="alon musk"
              height={`100%`}
              width={`100%`}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <div>
              Practice Paper section helped me in preparing without coaching.
            </div>
            <span>Ashish</span>
          </div>
        </div>
      </div>
      <div>
        <div style={{ border: "1px solid white" }}>
          <div
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
              border: "1px solid gray",
            }}
          >
            <img
              src="https://icon2.cleanpng.com/20180402/eeq/kisspng-swami-vivekananda-quotation-hinduism-indian-philos-bhagat-singh-5ac202fa8e3856.5858469315226641865825.jpg"
              alt="vivekananad"
              height={`100%`}
              width={`100%`}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div>
            <div>
              Practice Paper section helped me in preparing without coaching.
            </div>
            <span>Ashish</span>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default Testimonials;
