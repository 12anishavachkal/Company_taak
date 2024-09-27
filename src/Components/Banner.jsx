import React from "react";

const Banner = (props) => {
  return (
    <div>
      <h1
        style={{
          background: "orange",
          height: "500px",
          marginLeft: "15px",
          marginRight: "15px",
          overflow: "hidden",
        }}
      >
        <img
          src="https://cdn.sanity.io/images/ocl5w36p/production/73ff828330f22b1af35e2257ecbd49c1cd439fff-3840x1840.jpg?w=1600&auto=format&dpr=2"
          alt="..."
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </h1>
    </div>
  );
};

export default Banner;
