import React from 'react';
import './Contact.css';
export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="contact">Interested in working together? &nbsp; <div> We should queue up a time to chat. I’ll buy the coffee.</div> </div>
        <div className="reach">Reach out to me at</div>
        <div className="content-list">
          <div className="call">
            {/* <img src="https://cdn-icons-png.flaticon.com/128/8973/8973036.png" className="logo"/> */}
            Call me
            <div className="info">
              {/* <img src="https://cdn-icons-png.flaticon.com/128/8973/8973036.png" className="logo"/> */}
              9890818064
            </div>
          </div>
          <div className="call">
            Add <div className="info">Nagpur</div>
          </div>
          <div className="call">
            Email{' '}
            <div className="info">
              {/* <img src="https://cdn-icons-png.flaticon.com/128/3062/3062634.png" className="logo"/>  */}
              sumitbopate888@gmail.com
            </div>
          </div>
          <div className="call">
            Website <div className="info">sb.comm</div>
          </div>
        </div>
        <div className="credits">Handcrafted by sb &#x1F496;</div>
      </div>
    </>
  );
}
