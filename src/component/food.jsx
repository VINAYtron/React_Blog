import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const Food = () => {
  return (
    <>
      <div className="container">
        <div className="headingofA">
          <h1>Food</h1>
        </div>
        <div className="headingofB">
          <h1>Topic</h1>
        </div>
        <div className="aBox">
          <div></div>
          <div></div>
          <div className="firstA item">
            <Link to="/food/chickenMasala">
              <img
                className="mainImg"
                src="https://greatcurryrecipes.net/wp-content/uploads/2012/09/ctm21-720x540.jpg"
                alt="kerela"
              />
            </Link>
          </div>
          <div className="secondA item ">
            <h4>Chicken Tikka Masala</h4>
            <p>
              This dish is made with chicken that gets marinated in a spicy
              curry sauce with plain yogurt and cooked with tomatoes, spices,
              and more plain yogurt.
            </p>
            <b>Food:</b>January 24,2020
          </div>
          <div className="thirdA">
            <Link to="/food/dosaMasala">
              <img
                className="mainImg"
                src="https://www.iwmbuzz.com/wp-content/uploads/2021/08/yummy-good-for-tummy-masala-dosa-is-best-for-your-all-time-hunger-see-recipe-here-2.jpg"
                alt="madya Pradesh"
              />
            </Link>
          </div>
          <div className="fouthA item">
            <h4>Dosa Masala</h4>
            <p>
              This classic Masala dosa recipe makes perfectly light, soft and
              crispy crepes stuffed with a savory, wonderfully spiced potato and
              onion filling. It might take a bit of time to make delicious hotel
              style masala dosa, but with my step-by-step instructions and
              photos
            </p>
            <span>
              <b>Food:</b>Febuary 21,2020
            </span>
          </div>
          <div className="fifthA item">
            <Link to="/food/paneerTikka">
              <img
                className="mainImg"
                src="https://www.archanaskitchen.com//images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG"
                alt="Karnataka"
              />
            </Link>
          </div>
          <div className="sixthA item">
            <h4>Paneer Tikka</h4>

            <p>
              Paneer Tikka is a popular and delicious tandoori snack where
              Paneer are marinated in a spiced yogurt-based marinade, arranged
              on skewers and grilled in the oven.
            </p>
            <span>
              <b>Food:</b>March 23,2020
            </span>
          </div>
          <div className="sevenA item">
            <Link to="/food/maashBhaat">
              <img
                className="mainImg"
                src="https://i0.wp.com/pikturenama.com/wp-content/uploads/2020/10/Ilish-Mach-Bhaja-low-res-4.jpg?fit=1200%2C800&ssl=1"
                alt="Sikkim"
              />
            </Link>
          </div>
          <div className="eightA item">
            <h4>Maash Bhaat</h4>
            <p>
              There is nothing I prefer eating more than my fish and rice. Oddly
              stereotypical perhaps, but I have extremely fond memories of fish
              markets in the city. This plate of food puts a number of aspects
              about food I love generally in one place.
            </p>
            <b>Food:</b>April 21,2020
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
              By Dassana Amit Last Updated: June 4, 2021 Vegetarian 4.82 from 93
              votes • 264 Comments Shares 3.8k Step by Step Jump to Recipe Malai
              Kofta is a delicious dish of fried balls of potato and paneer in a
              rich and creamy mild gravy made with sweet onions and tomatoes.
            </p>
            <b>Food:</b>July 12,2020
          </div>
        </div>
        <div className="bBox">
          <div className="firstB">
            <Link to="/food/chickenMasala">
              <img
                className="subImg"
                src="https://greatcurryrecipes.net/wp-content/uploads/2012/09/ctm21-720x540.jpg"
                alt="kerela"
              />
            </Link>
          </div>
          <div className="secondA item">
            <h6>Chicken Tikka Masala</h6>

            <p>
              <span>
                <b>Food:</b>January 24,2020
              </span>
            </p>
          </div>
          <div className="thirdA item">
            <Link to="/food/dosaMasala">
              <img
                className="subImg"
                src="https://www.iwmbuzz.com/wp-content/uploads/2021/08/yummy-good-for-tummy-masala-dosa-is-best-for-your-all-time-hunger-see-recipe-here-2.jpg"
                alt="madya Pradesh"
              />
            </Link>
          </div>
          <div className="fouthA item">
            <h6>Dosa Masala</h6>
            <p>
              <span>
                <b>Food:</b>Febuary 21,2020
              </span>
            </p>
          </div>
          <div className="fifthA item">
            <Link to="/food/paneerTikka">
              <img
                className="subImg"
                src="https://www.archanaskitchen.com//images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG"
                alt="Karnataka"
              />
            </Link>
          </div>
          <div className="sixthA item">
            <h6>Paneer Tikka</h6>

            <p>
              <span>
                <b>Food:</b>March 23,2020
              </span>
            </p>
          </div>
          <div className="sevenA item">
            <Link to="/food/maashBhaat">
              <img
                className="subImg"
                src="https://i0.wp.com/pikturenama.com/wp-content/uploads/2020/10/Ilish-Mach-Bhaja-low-res-4.jpg?fit=1200%2C800&ssl=1"
                alt="Sikkim"
              />
            </Link>
          </div>
          <div className="eightA item">
            <h6>Maash Bhaat</h6>

            <p>
              <span>
                <b>Food:</b>April 21,2020
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
    </>
  );
};

export default Food;
