import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="mainheading">
        <div className="headitem1">
          <Link to="/tourism/kerela">
            <img
              className="headImg"
              src="https://cdn.audleytravel.com/3355/2397/79/1016846-alleppey-backwaters-kerala.jpg"
              alt="kerela"
            />
          </Link>
        </div>
        <div className="headitem2">
          <Link to="/fitness/flexibility">
            <img
              className="headImg"
              src="https://post.healthline.com/wp-content/uploads/2019/10/1296x728-body1-1296x728.jpg"
              alt="Punjab"
            />
          </Link>
        </div>
        <div className="headitem3">
          <Link to="/technology/cybersecurity">
            <img
              className="headImg"
              src="https://www.ict.eu/sites/corporate/files/images/Cyber%20security%20header_1920x1280px%20%281%29.jpg"
              alt="cyberecurity"
            />
          </Link>
        </div>
      </div>
      <div className="latestArticle">
        <h1 className="latestitem1">The Latest</h1>
        <div className="latestitem3">
          <Link to="/fitness/aerobic">
            <img
              className="mainImg"
              src="https://femina.wwmindia.com/content/2020/jun/aerobic-exercise-to1591015669.jpg"
              alt="Karnataka"
            />
          </Link>
        </div>
        <div className="latestitem3">
          <Link to="/bollywood/toofaan">
            <img
              className="mainImg"
              src="https://superstarsbio.com/wp-content/uploads/2020/03/toofan-poter.jpg"
              alt="Karnataka"
            />
          </Link>
        </div>
        <div className="latestitem4">
          <Link to="/food/paneerTikka">
            <img
              className="mainImg"
              src="https://www.archanaskitchen.com//images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG"
              alt="Karnataka"
            />
          </Link>
        </div>
        <div className="latestitem5">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/fitness/aerobic"
          >
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
          </Link>
        </div>
        <div className="latestitem5">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/bollywood/toofaan"
          >
            <h4>Faran Aktar in Toofaan</h4>
            <p>
              Toofaan ( transl. Storm) is an 2021 Indian Hindi-language sports
              drama film produced by Rakeysh Omprakash Mehra, Farhan Akhtar and
              Ritesh Sidhwani. Directed by Mehra
            </p>
            <span>
              <b>Bollywood:</b>March 23,2020
            </span>
          </Link>
        </div>
        <div className="latestitem5">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/food/paneerTikka"
            className="latestitem-content"
          >
            <h4>Paneer Tikka</h4>
            <p>
              Paneer Tikka is a popular and delicious tandoori snack where
              Paneer are marinated in a spiced yogurt-based marinade, arranged
              on skewers and grilled in the oven.
            </p>
            <span>
              <b>Food:</b>March 23,2020
            </span>
          </Link>
        </div>
      </div>
      <div className="latestArticle2">
        <div className="container">
          <div className="headingofA">
            <h1>Latest Article</h1>
          </div>
          <div className="headingofB">
            <h1>Top post</h1>
          </div>
          <div className="aBox">
            <div></div>
            <div></div>
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
                Good flexibility can improve range of motion and allow for
                better, more functional movement.
              </p>
              <b>Fitness</b>July 12,2020
            </div>
            <div className="nineA item">
              <Link to="/technology/cryptography">
                <img
                  className="mainImg"
                  src="https://img.electronicdesign.com/files/base/ebm/electronicdesign/image/2020/05/PROMOCryptographyHandbook_Ch5.5eceabbf11917.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630"
                  alt="Punjab"
                />
              </Link>
            </div>
            <div className="tenA item">
              <h4>Cryptography</h4>
              <p>
                Cryptography is the science of protecting information by
                transforming it into a secure format. This process, called
                encryption, has been used for centuries to prevent handwritten
                messages from being read by unintended recipients
              </p>
              <b>Technology</b>July 12,2020
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
            <div className="nineA item">
              <Link to="/food/malaiKofta">
                <img
                  className="mainImg"
                  src="https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Malai-Kofta-1300x730.jpg?v=1619104682"
                  alt="Punjab"
                />
              </Link>
            </div>
            <div className="tenA item">
              <h4>Malai Kofta</h4>
              <p>
                By Dassana Amit Last Updated: June 4, 2021 Vegetarian 4.82 from
                93 votes • 264 Comments Shares 3.8k Step by Step Jump to Recipe
                Malai Kofta is a delicious dish of fried balls of potato and
                paneer in a rich and creamy mild gravy made with sweet onions
                and tomatoes.
              </p>
              <b>Food:</b>July 12,2020
            </div>
          </div>
          <div className="bBox">
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
            <div className="nineA item">
              <Link to="/technology/crptography">
                <img
                  className="subImg"
                  src="https://img.electronicdesign.com/files/base/ebm/electronicdesign/image/2020/05/PROMOCryptographyHandbook_Ch5.5eceabbf11917.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630"
                  alt="fitness"
                />
              </Link>
            </div>
            <div className="tenA item">
              <h5>Cryptography</h5>
              <b>Technology</b>July 12,2020
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
            <div className="nineA item">
              <Link to="/food/malaiKofta">
                <img
                  className="subImg"
                  src="https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Malai-Kofta-1300x730.jpg?v=1619104682"
                  alt="Punjab"
                />
              </Link>
            </div>
            <div className="tenA item">
              <h6>Malai Kofta</h6>

              <p>
                <span>
                  <b>Food:</b>July 12,2020
                </span>
              </p>
            </div>
            <div className="Adv">
              <p>Advertistment</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
