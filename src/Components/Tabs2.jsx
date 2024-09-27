import { useState } from "react";
import './Tabs2.css'

const Tabs2 = () => {
    const [show, setShow] = useState(false);

    const showBar = () => {
        setShow(!show);
    };

    return (
        <div>
            <button className="btn1" onClick={showBar}>
                OFFERS
            </button>
            <div className={` main1 ${show ? "active-menu1" : ""}`}>
                <div>
                    <img src="https://cdn.sanity.io/images/ocl5w36p/production/8a52da528de9af99044e1b5bacb09e73cbd66ddf-1400x860.jpg?w=768&auto=format&dpr=2" alt="" style={{ height: '300px', width: '100%', boxSizing: "border-box", objectFit: 'cover', }} />
                    <p style={{ color: 'black' }}>Wake up to a symphony of flavours with our delectable breakfast spread and enjoy seamless internet connectivity and flexible cancellation for that added convenience.</p>
                </div>

            </div>
        </div>
    );
};
export default Tabs2