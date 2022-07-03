import React from "react";
import { useParams } from "react-router-dom";
const RoutingParamsFitness = () => {
  const params = useParams;
  console.log(params);

  const getDynamicData = () => {
    const { exercise } = params();
    if (exercise === "sweat") {
      return (
        <>
          <div className="detailItem">
            <h4>Sweat now shine later</h4>
            <img
              className="mainImgCont"
              src="https://cdn.mos.cms.futurecdn.net/KLZwUWe4JwyyXY7pV7CpaU.jpg"
              alt="kerela"
            />
            <p>
              Weight training is a type of strength training that stress uses
              weight for resistance . weight training provides a stress to the
              muscles that cause arm to addapt and get stronger simila to the
              way aerotic condition strengthens your hearts
            </p>
            <p>
              Exercise should be invigorating and challenging, not painful. High
              impact exercises can cause knee, hip, back, ankle, and other joint
              pain. But there are many exercises that can provide the same great
              benefits of exercising without the extra joint stress. Give your
              body a break from higher-stress exercises such as contact sports
              or running, and work up a sweat with these heart-pumping workouts:
            </p>
          </div>
        </>
      );
    } else if (exercise === "balance") {
      return (
        <div className="detailItem">
          <h4>Balance</h4>
          <img
            className="mainImgCont"
            src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F35%2F2022%2F06%2F21%2FPlyometrics-GettyImages-1278403727.jpg"
            alt="madya Pradesh"
          />
          <p>
            The Importance of Balance Training The Importance of Balance
            Training Adding Some Balance To Your Exercise Regimen Balance is the
            ability to control your body’s position, whether stationary (i.e. a
            complex yoga pose) or while moving (e.g. skiing).
          </p>
          <p>
            You can modify the exercises to increase or decrease the difficulty
            or adjust for your needs. Start on your nondominant side so that the
            second side is easier. You can do your nondominant side twice if you
            want to balance out your body between both sides. Once you get
            comfortable with the exercises, try doing them with one or both eyes
            closed.
          </p>
        </div>
      );
    } else if (exercise === "aerobic") {
      return (
        <div className="detailItem">
          <h4>Aerobic</h4>
          <img
            className="mainImgCont"
            src="https://femina.wwmindia.com/content/2020/jun/aerobic-exercise-to1591015669.jpg"
            alt="Karnataka"
          />

          <p>
            Aerobic exercise provides cardiovascular conditioning. The term
            aerobic actually means "with oxygen," which means that breathing
            controls the amount of oxygen that can make it to the muscles to
            help them burn fuel and move.
          </p>
          <p>
            It is recommended that you talk with your physician before you start
            an exercise program. Ask what, if any, limitations you may have.
            People who suffer from diabetes, hypertension, heart disease,
            arthritis, pulmonary conditions, or other health conditions may need
            additional safety guidelines for exercise.
          </p>
        </div>
      );
    } else if (exercise === "sprint") {
      return (
        <div className="detailItem">
          <h4>Sprint</h4>
          <img
            className="mainImgCont"
            src="https://cdn.shopify.com/s/files/1/0062/5532/files/i_stock_male_sprinter_image_xlg_size_6eec9ade-abd6-4641-af37-dd92b0680a5d.jpg?v=1523547218"
            alt="Sikkim"
          />
          <p>
            Sprint workouts are a great addition to a cardio or resistance
            training session. You can customize them based on time, fitness
            level, intensity, and the space you have available for exercise
          </p>
        </div>
      );
    } else if (exercise === "flexibility") {
      return (
        <div className="detailItem">
          <h4>Flexibility</h4>
          <img
            className="mainImgCont"
            src="https://post.healthline.com/wp-content/uploads/2019/10/1296x728-body1-1296x728.jpg"
            alt="Punjab"
          />
          <p>
            Flexibility allows your body to move through a range of motion. Good
            flexibility can improve range of motion and allow for better, more
            functional movement.
          </p>
        </div>
      );
    }
  };
  return <>{getDynamicData()}</>;
};

export default RoutingParamsFitness;
