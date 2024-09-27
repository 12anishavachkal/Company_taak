

import { useState } from "react";
import "./Tabs.css";

const Tab = () => {
  const [show, setShow] = useState(false);

  const showBar = () => {
    setShow(!show);
  };

  return (
    <div>
      <button className="btn" onClick={showBar}>
        DINING
      </button>
      <div className={` main ${show ? "active-menu" : ""}`}>
        <div className="dining">
          <img src="https://cdn.sanity.io/images/ocl5w36p/production/c0401c93116df10e12fea3bf9ea9662394fc9b80-906x972.jpg?w=480&auto=format&dpr=2" alt="" style={{ height: '300px', width: '100%', boxSizing: "border-box", objectFit: 'cover', }} />
          <p style={{ color: 'black' }}>Step into the realm of our culinary legends where a symphony of flavours enchants your taste buds, ambience embraces you in a tapestry of elegance and the genuine warmth of our service leaves you feeling truly indulged.</p>
        </div>

      </div>
    </div>
  );
};

export default Tab;

