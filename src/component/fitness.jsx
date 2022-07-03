import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const Fitness = () => {
  return (
    <>
      <div className="container">
        <div className="headingofA">
          <h1>Fitness</h1>
        </div>
        <div className="headingofB">
          <h1>Topic</h1>
        </div>
        <div className="aBox">
          <div></div>
          <div></div>
          <div className="firstA item">
            <Link to="/fitness/sweat">
              <img
                className="mainImg"
                src="https://cdn.mos.cms.futurecdn.net/KLZwUWe4JwyyXY7pV7CpaU.jpg"
                alt="kerela"
              />
            </Link>
          </div>
          <div className="secondA item ">
            <h4>Sweat now shine later</h4>
            <p>
              Weight training is a type of strength training that stress uses
              weight for resistance . weight training provides a stress to the
              muscles that cause arm to addapt and get stronger simila to the
              way aerotic condition strengthens your hearts
            </p>
            <b>Fitness:</b>January 24,2020
          </div>
          <div className="thirdA">
            <Link to="/fitness/balance">
              <img
                className="mainImg"
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2022%2F06%2F21%2FPlyometrics-GettyImages-1278403727.jpg"
                alt="madya Pradesh"
              />
            </Link>
          </div>
          <div className="fouthA item">
            <h4>Balance</h4>
            <p>
              The Importance of Balance Training The Importance of Balance
              Training Adding Some Balance To Your Exercise Regimen Balance is
              the ability to control your body’s position, whether stationary
              (i.e. a complex yoga pose) or while moving (e.g. skiing).
            </p>
            <span>
              <b>Fitness</b>Febuary 21,2020
            </span>
          </div>
          <div className="fifthA item">
            <Link to="/fitness/aerobic">
              <img
                className="mainImg"
                src="https://femina.wwmindia.com/content/2020/jun/aerobic-exercise-to1591015669.jpg"
                alt="Karnataka"
              />
            </Link>
          </div>
          <div className="sixthA item">
            <h4>Aerobic</h4>

            <p>
              Aerobic exercise provides cardiovascular conditioning. The term
              aerobic actually means "with oxygen," which means that breathing
              controls the amount of oxygen that can make it to the muscles to
              help them burn fuel and move.
            </p>
            <span>
              <b>Fitness</b>March 23,2020
            </span>
          </div>
          <div className="sevenA item">
            <Link to="/fitness/sprint">
              <img
                className="mainImg"
                src="https://cdn.shopify.com/s/files/1/0062/5532/files/i_stock_male_sprinter_image_xlg_size_6eec9ade-abd6-4641-af37-dd92b0680a5d.jpg?v=1523547218"
                alt="Sikkim"
              />
            </Link>
          </div>
          <div className="eightA item">
            <h4>Sprint</h4>
            <p>
              Sprint workouts are a great addition to a cardio or resistance
              training session. You can customize them based on time, fitness
              level, intensity, and the space you have available for exercise
            </p>
            <b>Fitness:</b>April 21,2020
          </div>
          <div className="nineA item">
            <Link to="/fitness/flexibility">
              <img
                className="mainImg"
                src="https://post.healthline.com/wp-content/uploads/2019/10/1296x728-body1-1296x728.jpg"
                alt="Punjab"
              />
            </Link>
          </div>
          <div className="tenA item">
            <h4>Flexibility</h4>
            <p>
              Flexibility allows your body to move through a range of motion.
              Good flexibility can improve range of motion and allow for better,
              more functional movement.
            </p>
            <b>Fitness</b>July 12,2020
          </div>
        </div>
        <div className="bBox">
          <div className="firstA item">
            <Link to="/fitness/sweat">
              <img
                className="subImg"
                src="https://cdn.mos.cms.futurecdn.net/KLZwUWe4JwyyXY7pV7CpaU.jpg"
                alt="kerela"
              />
            </Link>
          </div>
          <div className="secondA item ">
            <h5>Sweat now shine later</h5>
            <b>Fitness:</b>January 24,2020
          </div>
          <div className="thirdA">
            <Link to="/fitness/balance">
              <img
                className="subImg"
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2022%2F06%2F21%2FPlyometrics-GettyImages-1278403727.jpg"
                alt="madya Pradesh"
              />
            </Link>
          </div>
          <div className="fouthA item">
            <h5>Balance</h5>

            <span>
              <b>Fitness</b>Febuary 21,2020
            </span>
          </div>
          <div className="fifthA item">
            <Link to="/fitness/aerobic">
              <img
                className="subImg"
                src="https://femina.wwmindia.com/content/2020/jun/aerobic-exercise-to1591015669.jpg"
                alt="Karnataka"
              />
            </Link>
          </div>
          <div className="sixthA item">
            <h5>Aerobic</h5>

            <span>
              <b>Fitness</b>March 23,2020
            </span>
          </div>
          <div className="sevenA item">
            <Link to="/fitness/sprint">
              <img
                className="subImg"
                src="https://cdn.shopify.com/s/files/1/0062/5532/files/i_stock_male_sprinter_image_xlg_size_6eec9ade-abd6-4641-af37-dd92b0680a5d.jpg?v=1523547218"
                alt="Sikkim"
              />
            </Link>
          </div>
          <div className="eightA item">
            <h5>Sprint</h5>
            <b>Fitness:</b>April 21,2020
          </div>
          <div className="nineA item">
            <Link to="/fitness/flexibility">
              <img
                className="subImg"
                src="https://post.healthline.com/wp-content/uploads/2019/10/1296x728-body1-1296x728.jpg"
                alt="fitness"
              />
            </Link>
          </div>
          <div className="tenA item">
            <h5>Flexibility</h5>
            <b>Fitness</b>July 12,2020
          </div>
          <div className="Adv">
            <p>Advertistment</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fitness;
