import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const BollyWood = () => {
  return (
    <>
      <div className="container">
        <div className="headingofA">
          <h1>Bollywood</h1>
        </div>
        <div className="headingofB">
          <h1>Topic</h1>
        </div>
        <div className="aBox">
          <div></div>
          <div></div>
          <div className="firstA item">
            <Link to="/bollywood/attack">
              <img
                className="mainImg"
                src="https://i.ytimg.com/vi/Ma3Y-qekYos/maxresdefault.jpg"
                alt="kerela"
              />
            </Link>
          </div>
          <div className="secondA item ">
            <h4>John Abhram in Attack</h4>
            <p>
              Attack, an action thriller, starred John Abraham as a paralysed
              former soldier who is turned into India's first super soldier to
              combat terrorists. The film has reportedly collected an
              approximate of ₹12 crore in the first five days of its release.
            </p>
            <b>Bollywood:</b>January 24,2020
          </div>
          <div className="thirdA">
            <Link to="/bollywood/finalTruth">
              <img
                className="mainImg"
                src="https://images.news18.com/ibnlive/uploads/2021/12/studio_project-9-18-1-1-16402431994x3.jpg"
                alt="madya Pradesh"
              />
            </Link>
          </div>
          <div className="fouthA item">
            <h4>Aayush Sharma in antim: the Final Truth</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ullam omnis eaque molestiae rerum, illo perferendis at
              quo error. Corporis adipisci voluptatibus voluptates deleniti
            </p>
            <span>
              <b>Bollywood:</b>Febuary 21,2020
            </span>
          </div>
          <div className="fifthA item">
            <Link to="/bollywood/toofaan">
              <img
                className="mainImg"
                src="https://superstarsbio.com/wp-content/uploads/2020/03/toofan-poter.jpg"
                alt="Karnataka"
              />
            </Link>
          </div>
          <div className="sixthA item">
            <h4>Faran Aktar in Toofaan</h4>

            <p>
              Toofaan ( transl. Storm) is an 2021 Indian Hindi-language sports
              drama film produced by Rakeysh Omprakash Mehra, Farhan Akhtar and
              Ritesh Sidhwani. Directed by Mehra, it stars Akhtar as a national
              level boxer alongside Mrunal Thakur and Paresh Rawal, and
              premiered on 16 July 2021 on Amazon Prime Video.
            </p>
            <span>
              <b>Bollywood:</b>March 23,2020
            </span>
          </div>
          <div className="sevenA item">
            <Link to="/bollywood/theRise">
              <img
                className="mainImg"
                src="https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg"
                alt="Sikkim"
              />
            </Link>
          </div>
          <div className="eightA item">
            <h4>Allu Arjun in Pushpa: the rise</h4>
            <p>
              The box office collections of Allu Arjun–Rashmika Mandanna-starrer
              Pushpa The Rise have been phenomenal, with even the dubbed
              versions, including Hindi, setting the cash registers ringing. In
              fact, the Sukumar-directorial recently went past the Rs 100-crore
              club in Hindi
            </p>
            <b>Bollywood:</b>April 21,2020
          </div>
          <div className="nineA item">
            <Link to="/bollywood/Saina">
              <img
                className="mainImg"
                src="https://img.youtube.com/vi/55XTHZtWtH4/hqdefault.jpg"
                alt="Punjab"
              />
            </Link>
          </div>
          <div className="tenA item">
            <h4>Parineeti Chopra in Saina</h4>
            <p>
              Saina movie featuring Bollywood actress Parineeti Chopra hit the
              theaters on March 26. Based on the life of the ace badminton
              player Saina Nehwal, the film talks about her journey, her
              achievements and the hardships she faced.
            </p>
            <b>Bollywood:</b>July 12,2020
          </div>
        </div>
        <div className="bBox">
          <div className="firstB">
            <Link to="/bollywood/attack">
              <img
                className="subImg"
                src="https://i.ytimg.com/vi/Ma3Y-qekYos/maxresdefault.jpg"
                alt="kerela"
              />
            </Link>
          </div>
          <div className="secondA item">
            <h6>John Abhram in Attack</h6>

            <p>
              <span>
                <b>Bollywood:</b>January 24,2020
              </span>
            </p>
          </div>
          <div className="thirdA item">
            <Link to="/bollywood/finalTruth">
              <img
                className="subImg"
                src="https://images.news18.com/ibnlive/uploads/2021/12/studio_project-9-18-1-1-16402431994x3.jpg"
                alt="madya Pradesh"
              />
            </Link>
          </div>
          <div className="fouthA item">
            <h6>Aayush Sharma in antim: the Final Truth</h6>
            <p>
              <span>
                <b>Bollywood:</b>Febuary 21,2020
              </span>
            </p>
          </div>
          <div className="fifthA item">
            <Link to="/bollywood/toofaan">
              <img
                className="subImg"
                src="https://superstarsbio.com/wp-content/uploads/2020/03/toofan-poter.jpg"
                alt="Karnataka"
              />
            </Link>
          </div>
          <div className="sixthA item">
            <h6>Faran Aktar in Toofaan</h6>

            <p>
              <span>
                <b>Bollywood:</b>March 23,2020
              </span>
            </p>
          </div>
          <div className="sevenA item">
            <Link to="/bollywood/theRise">
              <img
                className="subImg"
                src="https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg"
                alt="Sikkim"
              />
            </Link>
          </div>
          <div className="eightA item">
            <h6>Allu Arjun in Pushpa: the rise</h6>

            <p>
              <span>
                <b>Bollywood:</b>April 21,2020
              </span>
            </p>
          </div>
          <div className="nineA item">
            <Link to="/bollywood/Saina">
              <img
                className="subImg"
                src="https://img.youtube.com/vi/55XTHZtWtH4/hqdefault.jpg"
                alt="Punjab"
              />
            </Link>
          </div>
          <div className="tenA item">
            <h6>Parineeti Chopra in Saina</h6>

            <p>
              <span>
                <b>Bollywood:</b>July 12,2020
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

export default BollyWood;
