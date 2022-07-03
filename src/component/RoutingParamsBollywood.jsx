import React from "react";
import { useParams } from "react-router-dom";
const RoutingParamsBollywood = () => {
  const params = useParams();
  console.log(params);

  const getDynamicData = () => {
    const { movie } = params;
    if (movie === "attack") {
      return (
        <>
          <div className="attack">
            <h4>John Abhram in Attack</h4>
            <img
              className="mainImgCont"
              src="https://i.ytimg.com/vi/Ma3Y-qekYos/maxresdefault.jpg"
              alt="kerela"
            />
            <p>
              Attack, an action thriller, starred John Abraham as a paralysed
              former soldier who is turned into India's first super soldier to
              combat terrorists. The film has reportedly collected an
              approximate of ₹12 crore in the first five days of its release.
            </p>
            <p>
              John shared the note on his social media accounts on Thursday, as
              the film marked a week of its release. He captioned the post,
              “Once again, Thank you” as he thanked the audience for whatever
              appreciation the film has received.
            </p>
            <p>
              The note read, “Whatever appreciation we have received for the
              film, a big thank you to the audience for accepting something
              that’s new and different. Attack was an honest, humble experiment
              on our part, to give the industry something refreshing and new. It
              was challenging through the 3 pandemic waves, but we got what we
              wanted. I completely own and am proud of this film. I stand by the
              honest effort every team member has taken on Attack.”
            </p>
          </div>
        </>
      );
    } else if (movie === "finalTruth") {
      return (
        <div className="detailItem">
          <h4>Aayush Sharma in antim: the Final Truth</h4>
          <img
            className="mainImgCont"
            src="https://images.news18.com/ibnlive/uploads/2021/12/studio_project-9-18-1-1-16402431994x3.jpg"
            alt="madya Pradesh"
          />
          <p>
            Continuing the winning streak, Aayush has now bagged his first award
            for his portrayal as he takes home the 'Best Actor in a Negative
            Role' Award at the Dadasaheb Phalke International Film Festival
            Awards. Overwhelmed by the abundant love and appreciation from the
            audience and critics, Aayush Sharma expressed his gratitude to
            everyone, especially thanking Salman Khan.
          </p>
          <p>
            Talking about the experience of portraying a negative character,
            Aayush Sharma said, "When I first heard about the film Antim, I
            thought how do I portray a negative role, so the first thing I asked
            Mahesh sir was, 'Sir villain?' he said to me, 'No person is born a
            hero or villain, their experiences make them hero or villain ',
            that's the story of Antim."
          </p>
        </div>
      );
    } else if (movie === "toofaan") {
      return (
        <div className="detailItem">
          <h4>Faran Aktar in Toofaan</h4>
          <img
            className="mainImgCont"
            src="https://superstarsbio.com/wp-content/uploads/2020/03/toofan-poter.jpg"
            alt="Karnataka"
          />

          <p>
            Toofaan ( transl. Storm) is an 2021 Indian Hindi-language sports
            drama film produced by Rakeysh Omprakash Mehra, Farhan Akhtar and
            Ritesh Sidhwani. Directed by Mehra, it stars Akhtar as a national
            level boxer alongside Mrunal Thakur and Paresh Rawal, and premiered
            on 16 July 2021 on Amazon Prime Video.
          </p>
          <p>
            Rakeysh Omprakash Mehra and Farhan Akhtar set the bar high with
            their first collaboration, Bhaag Milkha Bhaag (2013), in which the
            former's gift for storytelling and the latter's efforts to transform
            himself into an athlete combined to produce a classic sports drama.
            But fans hoping to see the duo surpass themselves in Toofaan are
            bound to be disappointed. Toofaan begins with a brash, gutsy Aziz
            (Farhan), thrashing fellow goons of his area. He is an orphan who
            has been brought up by a local gangster. After the brawl, he lands
            in a local charity hospital where he meets Dr Ananya (Mrunal
            Thakur). Aziz discovers boxing during a visit to a local gym and
            immediately gets hooked on to legendary boxer Muhammad Ali's videos.
          </p>
        </div>
      );
    } else if (movie === "theRise") {
      return (
        <div className="detailItem">
          <h4>Allu Arjun in Pushpa: the rise</h4>
          <img
            className="mainImgCont"
            src="https://www.tollywood.net/wp-content/uploads/2021/12/Allu-Arjun-Pushpa-trailer-launch-event-in-Chennai-tomorrow.jpg"
            alt="Sikkim"
          />
          <p>
            The box office collections of Allu Arjun–Rashmika Mandanna-starrer
            Pushpa The Rise have been phenomenal, with even the dubbed versions,
            including Hindi, setting the cash registers ringing. In fact, the
            Sukumar-directorial recently went past the Rs 100-crore club in
            Hindi
          </p>
        </div>
      );
    } else if (movie === "Saina") {
      return (
        <div className="detailItem">
          <h4>Parineeti Chopra in Saina</h4>
          <img
            className="mainImgCont"
            src="https://img.youtube.com/vi/55XTHZtWtH4/hqdefault.jpg"
            alt="Punjab"
          />
          <p>
            Saina movie featuring Bollywood actress Parineeti Chopra hit the
            theaters on March 26. Based on the life of the ace badminton player
            Saina Nehwal, the film talks about her journey, her achievements and
            the hardships she faced.
          </p>
        </div>
      );
    }
  };
  return <>{getDynamicData()}</>;
};

export default RoutingParamsBollywood;
