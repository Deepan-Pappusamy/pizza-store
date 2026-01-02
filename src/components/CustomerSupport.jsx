import "../styles/customerSupport.css";
import heartPizza from "../assets/photos/support/heart-pizza.jpg";
import { BUTTONS, TEXTS } from "../data/Data";
import { useState } from "react";

const CustomerSupport = () => {
  const [message, setMessage] = useState("");

  const sendMail = () => {
    if (!message.trim()) {
      alert("Please type a message");
    } else {
      const subject = "Customer support request";
      const body = `Hi Dee,

  ${message}
  
  Thanks`;

      window.location.href =
        `mailto:deepan.pappusamy@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      setMessage("");
    }
  };

  return (
    <div className="support-section">
      <div className="support_content">
        <div className="msg_bubble user">
          <p>{TEXTS.MESSAGE_HI_HEART}</p>
        </div>
        <div className="msg_bubble">
          <p>{TEXTS.MESSAGE_HEY_BUDDY_HEART}</p>
        </div>
        <div className="msg_bubble">
          <p>
            {TEXTS.MESSAGE_DONT_HESITATE}
            <span className="help-span">{TEXTS.MESSAGE_HERE_TO_HELP} </span>
            {TEXTS.MEASSAGE_DETAILS}
          </p>
        </div>
        <div className="msg_bubble">
          <p>
            <span className="typewriter">{TEXTS.MESSAGE_TYPE_BELOW}</span>
          </p>
        </div>

        <div className="input_area">
          <textarea
            className="support_textarea"
            placeholder="Type your question..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button className="support_send_button" onClick={sendMail}>
            {BUTTONS.SEND}
          </button>
        </div>
      </div>
      <div className="support_visual">
        <img src={heartPizza} className="rocket" />
      </div>
    </div>
  );
};

export default CustomerSupport;
