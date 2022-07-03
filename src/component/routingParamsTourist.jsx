import React from "react";
import { useParams } from "react-router-dom";

const RoutingParamsTourist = () => {
  const params = useParams();
  console.log(params);

  const getDynamicData = () => {
    const { place } = params;
    if (place === "kerela") {
      return (
        <>
          <div className="detailItem">
            <h4>Kerela: God's Own Country</h4>
            <img
              className="mainImgCont"
              src="https://cdn.audleytravel.com/3355/2397/79/1016846-alleppey-backwaters-kerala.jpg"
              alt="kerela"
            />
            <p>
              If you’re looking for a Southern getaway in India then Kerala is
              the perfect choice of destination to plan your escape to and you
              have landed at the right place to make this tropical vacation
              happen! Famously known as the ‘God’s Own Country’, Kerala is the
              picturesque beauty that is located in the tropical Malabar Coast
              of India and here we give you a wide selection of Kerala Blogs,
              expertly weitten to cater to all your travel needs. You can go as
              far as you can with your imagination and find the best of options
              to make your Kerala trip come true with a lifetime of memories and
              adventures to look forward to. The backwaters of Kerala are a
              perfect place to unwind in the midst of swaying palm trees and
              spice plantations. Soak in the aroma of coffee and go on an
              evening stroll exploring the tropical landscape of Kerala. Find
              all the information about comfortable homestays or luxurious
              houseboats on this Kerala trip blog for a blissful vacation in
              this souther beauty. With what you'll learn from these Kerala tour
              blogs you are bound to have a hassle free trip. Also, if you want
              motivation to traverse the serene backwaters of this piece of
              paradise, teh below given write-ups will do the trick for you.
              Discover hidden gems, go off the beaten track and share your best
              travel moments with your friends and family back home!
            </p>
          </div>
        </>
      );
    } else if (place === "madhyaPradesh") {
      return (
        <div className="detailItem">
          <h4>Madhya Pradesh: The Heart of India</h4>
          <img
            className="mainImgCont"
            src="https://www.tourmyindia.com/states/madhyapradesh/image/best-of-madhya-pradesh.webp"
            alt="madya Pradesh"
          />
          <p>
            Madhya Pradesh has been aptly called the ‘Heart of India’. Remember
            way back in the 2000s we were bombarded with Madhya Pradesh tourism
            ads where snippets of the beautiful state were strung together to
            show us all that Madhya Pradesh has in store for us? And yet, after
            all those years, I still believe Madhya Pradesh does not get the
            same limelight as the other touristy places in India.
          </p>
          <p>
            Extremely rich in history, culture, age-old traditions and not to
            forget the amazing art & craft, Madhya Pradesh is one of the biggest
            contributors in making India a diverse country. Madhya Pradesh owes
            much to the reign of different dynasties over a long period of time
            for its rich history and majestic monuments that are the crown
            jewels of India.
          </p>
        </div>
      );
    } else if (place === "karnataka") {
      return (
        <div className="detailItem">
          <h4>Karnataka: One State Many World</h4>
          <img
            className="mainImgCont"
            src="https://www.tourmyindia.com/blog//wp-content/uploads/2018/08/Karnataka-Travel-Alerts-Safety-Tips.jpg"
            alt="Karnataka"
          />
          <p>
            As per Hindu traditions, a person has to be clean and pure
            physically before sitting for pooje or japa or dhyana. So after
            bathing, the person should head straight to the poojasthala (place
            of worship) without coming in contact with anyone or anything. This
            reminds of a little story one of my uncles had shared. During his
            childhood days, his father would wait at the bathroom door, as soon
            as my uncle finished his bath, stepped out with a towel around his
            waist, he would be herded to the pooja room where he applied Vibhuti
            to forehead, neck and arms, then chant a sloka or two and then free
            to go. The process was to ensure that pooje is performed in the
            freshest condition. This practice goes back to ancient times where
            people would take bath and then sit for pooje or japa dripping wet.
            Japada Bavi was one such well designed for a person to bathe and
            immediately commence rituals.
          </p>
        </div>
      );
    } else if (place === "sikkim") {
      return (
        <div className="detailItem">
          <h4>Sikkim: Small But Beautiful</h4>
          <img
            className="mainImgCont"
            src="https://www.sikkimtourism.gov.in/Content/Pics/travellerEssentials/Tourismcalendar/calendarImage2.jpg"
            alt="Sikkim"
          />
          <p>
            Sikkim is the second smallest state in India, and is wedged between
            Tibet, Nepal, Bhutan, and West Bengal, but encompasses an astounding
            range of pristine natural beauty of the Himalayas. A
            traveller&rsquo;s guide to Sikkim explores the stunning beauty of
            this Himalayas hill town. The Sikkimese call their land &lsquo;Ney
            Mayal Lyang&rsquo; that translates to &lsquo;heaven.&rsquo;
          </p>
          <p>
            Sikkim is located in the north eastern part of India, but is not a
            part of the Seven Sister states. The state is famous for dazzling
            waterfalls, virgin forests, Tibetan style Buddhist Gompas, alpine
            meadows, rhododendron flowers and more. Kanchenjunga (also
            Kanchendzonga) at 8598 m is the third highest peak in the world, and
            lies in Sikkim.
          </p>
        </div>
      );
    } else if (place === "punjab") {
      return (
        <div className="detailItem">
          <h4>Punjab: India Begin Here</h4>
          <img
            className="mainImgCont"
            src="https://www.fabhotels.com/blog/wp-content/uploads/2019/10/Punjab-Tourism_600-1280x720.jpg"
            alt="Punjab"
          />
          <p>
            Punjab is the place of Sikhism . The holiest of Sikh shrines, the
            Sri Harmandir Sahib (or Golden Temple), is in the city of Amritsar .
            The five Takhts (Temporal Seats of religious authority) of Sikhism,
            three are in Punjab. These are Sri Akal Takht Sahib, Damdama Sahib
            and Anandpur Sahib. Punjab is one of the leading states of India in
            terms of infrastructure . It is also known for its sports and
            hosiery goods industry. Enjoy the unparalleled hospitality and
            warmth of the natives .Some of the leading tourist attractions in
            Punjab are: Amritsar- Golden temple , Jallianwala bagh, Wagah
            Border, Maharaja Ranjit Singh Museum, Patiala - Sheesh mahal, Quila
            Muabrak , Moti Bagh Palace, Kali devi Temple , Chandigarh- Sikh
            Ajaibghar, Sukhna lake, Rock garden , Rose garden etc.
          </p>
        </div>
      );
    } else {
      return (
        <>
          <p>None</p>
        </>
      );
    }
  };
  return <>{getDynamicData()}</>;
};

export default RoutingParamsTourist;
