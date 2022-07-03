import React from "react";
import { useParams } from "react-router-dom";
const RoutingParamsFood = () => {
  const params = useParams();
  console.log(params);

  const getDynamicData = () => {
    const { dish } = params;
    if (dish === "chickenMasala") {
      return (
        <>
          <div className="detailItem">
            <h4>Chicken Tikka Masala</h4>
            <img
              className="mainImgCont"
              src="https://greatcurryrecipes.net/wp-content/uploads/2012/09/ctm21-720x540.jpg"
              alt="kerela"
            />
            <p>
              This dish is made with chicken that gets marinated in a spicy
              curry sauce with plain yogurt and cooked with tomatoes, spices,
              and more plain yogurt.
            </p>
            <p>
              The BEST part about this recipe and just like our Butter Chicken —
              you may already have these ingredients in your kitchen. If not,
              they are so easy to find in any grocery store, you won’t need to
              go searching high and low to find them! Authentic Chicken Tikka
              Masala is usually made with yogurt marinated chicken, skewered and
              chargrilled for incredible bbq flavours. For the sake of making
              this recipe much easier for us to make at home, we are using a
              skillet or pot to cook it all in, while still keeping those
              amazing flavours.
            </p>
          </div>
        </>
      );
    } else if (dish === "dosaMasala") {
      return (
        <div className="detailItem">
          <h4>Dosa Masala</h4>
          <img
            className="mainImgCont"
            src="https://www.iwmbuzz.com/wp-content/uploads/2021/08/yummy-good-for-tummy-masala-dosa-is-best-for-your-all-time-hunger-see-recipe-here-2.jpg"
            alt="madya Pradesh"
          />
          <p>
            This classic Masala dosa recipe makes perfectly light, soft and
            crispy crepes stuffed with a savory, wonderfully spiced potato and
            onion filling. It might take a bit of time to make delicious hotel
            style masala dosa, but with my step-by-step instructions and photos
          </p>
          <p>
            While masala dosa is a famous snack most popular in South India,
            these tasty stuffed crepes are enjoyed in North India as well and
            can be found on menus throughout the world. Masala dosa are crispy,
            soft, savory and healthy crepes made with a rice and lentil batter.
            The dosa are gluten-free and dairy-free, with a sturdy yet soft
            texture that’s great for holding a hearty homemade potato filling.
            To make the batter, lentils and rice are soaked for several hours
            and then blended together. This makes a creamy and smooth batter.
            This rice and lentil batter is fermented overnight to create just
            the right tangy flavor and tender, light crepes.
          </p>
        </div>
      );
    } else if (dish === "paneerTikka") {
      return (
        <div className="detailItem">
          <h4>Paneer Tikka</h4>
          <img
            className="mainImgCont"
            src="https://www.archanaskitchen.com//images/archanaskitchen/1-Author/Neha_Mathur/Achari_Paneer_Tikka_Recipe_Party_Food.JPG"
            alt="paneerTikka"
          />

          <p>
            Paneer Tikka is a popular and delicious tandoori snack where Paneer
            are marinated in a spiced yogurt-based marinade, arranged on skewers
            and grilled in the oven.
          </p>
          <p>
            The process is pretty simple, you marinate the paneer with spices
            and yogurt, let it sit for a bit so that the flavors mix well
            together and then arrange the paneer cubes along with onion and
            peppers in a skewer and grill. However, the taste of paneer tikka
            lies in its marination of course. So to make a good paneer tikka you
            first need to make a very good marinade. My marinade includes lots
            of spices and Greek yogurt. Now if you can’t find Greek yogurt
            that’s okay. You may use regular yogurt too, just make sure to
            strain it for 3-4 hours before using. You really need thick yogurt
            to marinate the panner cubes.
          </p>
        </div>
      );
    } else if (dish === "maashBhaat") {
      return (
        <div className="detailItem">
          <h4>Maash Bhaat</h4>
          <img
            className="mainImgCont"
            src="https://i0.wp.com/pikturenama.com/wp-content/uploads/2020/10/Ilish-Mach-Bhaja-low-res-4.jpg?fit=1200%2C800&ssl=1"
            alt="Sikkim"
          />
          <p>
            There is nothing I prefer eating more than my fish and rice. Oddly
            stereotypical perhaps, but I have extremely fond memories of fish
            markets in the city. This plate of food puts a number of aspects
            about food I love generally in one place.
          </p>
        </div>
      );
    } else if (dish === "malaiKofta") {
      return (
        <div className="detailItem">
          <h4>Malai Kofta</h4>
          <img
            className="mainImgCont"
            src="https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Malai-Kofta-1300x730.jpg?v=1619104682"
            alt="Punjab"
          />
          <p>
            By Dassana Amit Last Updated: June 4, 2021 Vegetarian 4.82 from 93
            votes • 264 Comments Shares 3.8k Step by Step Jump to Recipe Malai
            Kofta is a delicious dish of fried balls of potato and paneer in a
            rich and creamy mild gravy made with sweet onions and tomatoes.
          </p>
          <p>
            There is nothing I prefer eating more than my fish and rice. Oddly
            stereotypical perhaps, but I have extremely fond memories of fish
            markets in the city. This plate of food puts a number of aspects
            about food I love generally in one place.
          </p>
        </div>
      );
    }
  };
  return <>{getDynamicData()}</>;
};

export default RoutingParamsFood;
