/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Headlogo = () => {
  const image1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcioe8iQXjcpMALBmXxxXEzpbv07XtVk3QA&usqp=CAU";
  const image2 =
    "https://www.buurst.com/wp-content/uploads/2021/02/highradius-White-Transparent-1.png";

  return (
    <div style={{ padding: "10px 3px" }} className="logo-hrc">
      <img
        style={{ display: "flex", height: "50px", float: "left" }}
        src={image1}
      />
      <img style={{ display: "inline-block", height: "50px" }} src={image2} />
    </div>
  );
};

export default Headlogo;
