import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
const Tourism = () => {
  return (
    <>
      <div className="container">
        <div className="headingofA">
          <h1>Tourism</h1>
        </div>
        <div className="headingofB">
          <h1>Topic</h1>
        </div>
        <div className="aBox">
          <div></div>
          <div></div>
          <div className="firstA item">
            <Link to="/tourism/kerela">
              <img
                className="mainImg"
                src="https://cdn.audleytravel.com/3355/2397/79/1016846-alleppey-backwaters-kerala.jpg"
                alt="kerela"
              />
            </Link>
          </div>
          <div className="secondA item ">
            <h4>Kerela: God's Own Country</h4>
            <p>
              If you’re looking for a Southern getaway in India then Kerala is
              the perfect choice of destination to plan your escape to and you
              have landed at the right place to make this tropical vacation
              happen! Famously known as the God’s Own Country
            </p>
            <b>Tourism:</b>January 24,2020
          </div>
          <div className="thirdA">
            <Link to="/tourism/madhyaPradesh">
              <img
                className="mainImg"
                src="https://www.tourmyindia.com/states/madhyapradesh/image/best-of-madhya-pradesh.webp"
                alt="madya Pradesh"
              />
            </Link>
          </div>
          <div className="fouthA item">
            <h4>Madhya Pradesh: The Heart of India</h4>
            <p>
              Madhya Pradesh, the heart of Incredible India, is embellished with
              culturally rich ancient heritage of India.
            </p>
            <span>
              <b>Tourism:</b>Febuary 21,2020
            </span>
          </div>
          <div className="fifthA item">
            <Link to="/tourism/karnataka">
              <img
                className="mainImg"
                src="https://www.tourmyindia.com/blog//wp-content/uploads/2018/08/Karnataka-Travel-Alerts-Safety-Tips.jpg"
                alt="Karnataka"
              />
            </Link>
          </div>
          <div className="sixthA item">
            <h4>Karnataka: One State Many World</h4>

            <p>
              Places to visit in Karnataka all around the year, but the month of
              November brings with itself a mythical allure that cannot be
              missed
            </p>
            <span>
              <b>Tourism:</b>March 23,2020
            </span>
          </div>
          <div className="sevenA item">
            <Link to="/tourism/sikkim">
              <img
                className="mainImg"
                src="https://www.sikkimtourism.gov.in/Content/Pics/travellerEssentials/Tourismcalendar/calendarImage2.jpg"
                alt="Sikkim"
              />
            </Link>
          </div>
          <div className="eightA item">
            <h4>Sikkim: Small But Beautiful</h4>
            <p>
              Sikkim is a state in northeastern India. It borders the Tibet
              Autonomous Region of China in the north and northeast, Bhutan in
              the east, Province No. 1 of Nepal in the west, and West Bengal in
              the south.
            </p>
            <b>Tourism:</b>April 21,2020
          </div>
          <div className="nineA item">
            <Link to="/tourism/punjab">
              <img
                className="mainImg"
                src="https://www.fabhotels.com/blog/wp-content/uploads/2019/10/Punjab-Tourism_600-1280x720.jpg"
                alt="Punjab"
              />
            </Link>
          </div>
          <div className="tenA item">
            <h4>Punjab: India Begin Here</h4>
            <p>
              Punjab is land of five rivers in North West India and North East
              Pakistan. Punj means five and aab means water, so Punjab means
              five waters. These five rivers named Beas, Satluj, Ravi, Chenab
              and Jhelum. Beas, and Satluj
            </p>
            <b>Tourism:</b>July 12,2020
          </div>
        </div>
        <div className="bBox">
          <div className="firstB">
            <Link to="/tourism/kerela">
              <img
                className="subImg"
                src="https://cdn.audleytravel.com/3355/2397/79/1016846-alleppey-backwaters-kerala.jpg"
                alt="kerela"
              />
            </Link>
          </div>
          <div className="secondA item">
            <h6>Kerela: God's Own Country</h6>

            <p>
              <span>
                <b>Tourism:</b>January 24,2020
              </span>
            </p>
          </div>
          <div className="thirdA item">
            <Link to="/tourism/madhyaPradesh">
              <img
                className="subImg"
                src="https://www.tourmyindia.com/states/madhyapradesh/image/best-of-madhya-pradesh.webp"
                alt="madya Pradesh"
              />
            </Link>
          </div>
          <div className="fouthA item">
            <h6>Madhya Pradesh: The Heart of India</h6>
            <p>
              <span>
                <b>Tourism:</b>Febuary 21,2020
              </span>
            </p>
          </div>
          <div className="fifthA item">
            <Link to="/tourism/karnataka">
              <img
                className="subImg"
                src="https://www.tourmyindia.com/blog//wp-content/uploads/2018/08/Karnataka-Travel-Alerts-Safety-Tips.jpg"
                alt="Karnataka"
              />
            </Link>
          </div>
          <div className="sixthA item">
            <h6>Karnataka: One State Many World</h6>

            <p>
              <span>
                <b>Tourism:</b>March 23,2020
              </span>
            </p>
          </div>
          <div className="sevenA item">
            <Link to="/tourism/sikkim">
              <img
                className="subImg"
                src="https://www.sikkimtourism.gov.in/Content/Pics/travellerEssentials/Tourismcalendar/calendarImage2.jpg"
                alt="Sikkim"
              />
            </Link>
          </div>
          <div className="eightA item">
            <h6>Sikkim: Small But Beautiful</h6>

            <p>
              <span>
                <b>Tourism:</b>April 21,2020
              </span>
            </p>
          </div>
          <div className="nineA item">
            <Link to="/tourism/punjab">
              <img
                className="subImg"
                src="https://www.fabhotels.com/blog/wp-content/uploads/2019/10/Punjab-Tourism_600-1280x720.jpg"
                alt="Punjab"
              />
            </Link>
          </div>
          <div className="tenA item">
            <h6>Punjab: India Begin Here</h6>

            <p>
              <span>
                <b>Tourism:</b>July 12,2020
              </span>
            </p>
          </div>
          <div className="Adv">
            <p>Advertistment</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tourism;
