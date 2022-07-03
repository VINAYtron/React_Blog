import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const Technology = () => {
  return (
    <>
      <div className="container">
        <div className="headingofA">
          <h1>Technology</h1>
        </div>
        <div className="headingofB">
          <h1>Topic</h1>
        </div>
        <div className="aBox">
          <div></div>
          <div></div>
          <div className="firstA item">
            <Link to="/technology/cybersecurity">
              <img
                className="mainImg"
                src="https://www.ict.eu/sites/corporate/files/images/Cyber%20security%20header_1920x1280px%20%281%29.jpg"
                alt="cyberecurity"
              />
            </Link>
          </div>
          <div className="secondA item ">
            <h4>CyberSecurity:</h4>
            <p>
              Cybersecurity is the protection of internet-connected systems such
              as hardware, software and data from cyberthreats. The practice is
              used by individuals and enterprises to protect against
              unauthorized access to data centers and other computerized
              systems.
            </p>
            <b>Technology:</b>January 24,2020
          </div>
          <div className="thirdA">
            <Link to="/technology/blockchain">
              <img
                className="mainImg"
                src="https://www.capgemini.com/au-en/wp-content/uploads/sites/9/2018/04/clockchain-7.png"
                alt="Block Chain"
              />
            </Link>
          </div>
          <div className="fouthA item">
            <h4>BlockChain</h4>
            <p>
              a blockchain is a digital ever-growing list of data records. Such
              a list is comprised of many blocks of data, which are organized in
              chronological order and are linked and secured by cryptographic
              proofs.
            </p>
            <span>
              <b>Technology</b>Febuary 21,2020
            </span>
          </div>
          <div className="fifthA item">
            <Link to="/technology/artificialIntelligence">
              <img
                className="mainImg"
                src="https://static.javatpoint.com/tutorial/machine-learning/images/ai-vs-machine-learning.png"
                alt="Karnataka"
              />
            </Link>
          </div>
          <div className="sixthA item">
            <h4>Artificial Intelligence and Machine Learinig</h4>

            <p>
              Artificial Intelligence is the science and engineering of making
              intelligent machines, especially intelligent computer programs.
              Artificial Intelligence is related to the similar task of using
              computers to understand human intelligence.
            </p>
            <span>
              <b>Technology</b>March 23,2020
            </span>
          </div>
          <div className="sevenA item">
            <Link to="/technology/internetofthings">
              <img
                className="mainImg"
                src="https://www.zdnet.com/a/img/resize/cfc4b83ef647bebfba629ae1f5d215d412895eba/2020/09/28/6b225a1a-381a-4ceb-b13c-d2d314d41bd7/what-is-the-iot-everything-you-need-to-k-5f6cc13d5f60de4b41b7f3d4-1-sep-28-2020-16-19-38-poster.jpg?auto=webp&fit=cover&height=482&width=856"
                alt="Sikkim"
              />
            </Link>
          </div>
          <div className="eightA item">
            <h4>Internet Of Things</h4>
            <p>
              The Internet of Things (IoT) describes physical objects (or groups
              of such objects) with sensors, processing ability, software, and
              other technologies that connect and exchange data with other
              devices and systems over the Internet or other communications
              networks.
            </p>
            <b>Technology:</b>April 21,2020
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
        </div>
        <div className="bBox">
          <div className="firstA item">
            <Link to="/technology/cybersecurity">
              <img
                className="subImg"
                src="https://www.ict.eu/sites/corporate/files/images/Cyber%20security%20header_1920x1280px%20%281%29.jpg"
                alt="kerela"
              />
            </Link>
          </div>
          <div className="secondA item ">
            <h5>CyberSecurity</h5>
            <b>Technology:</b>January 24,2020
          </div>
          <div className="thirdA">
            <Link to="/technology/blockchain">
              <img
                className="subImg"
                src="https://www.capgemini.com/au-en/wp-content/uploads/sites/9/2018/04/clockchain-7.png"
                alt="madya Pradesh"
              />
            </Link>
          </div>
          <div className="fouthA item">
            <h5>BlockChain</h5>

            <span>
              <b>Technology</b>Febuary 21,2020
            </span>
          </div>
          <div className="fifthA item">
            <Link to="/technology/artificialIntelligence">
              <img
                className="subImg"
                src="https://static.javatpoint.com/tutorial/machine-learning/images/ai-vs-machine-learning.png"
                alt="Karnataka"
              />
            </Link>
          </div>
          <div className="sixthA item">
            <h6>Artificial Intelligence and Machine Learinig</h6>

            <span>
              <b>Technology</b>March 23,2020
            </span>
          </div>
          <div className="sevenA item">
            <Link to="/technology/internetofthings">
              <img
                className="subImg"
                src="https://www.zdnet.com/a/img/resize/cfc4b83ef647bebfba629ae1f5d215d412895eba/2020/09/28/6b225a1a-381a-4ceb-b13c-d2d314d41bd7/what-is-the-iot-everything-you-need-to-k-5f6cc13d5f60de4b41b7f3d4-1-sep-28-2020-16-19-38-poster.jpg?auto=webp&fit=cover&height=482&width=856"
                alt="Sikkim"
              />
            </Link>
          </div>
          <div className="eightA item">
            <h5>Internet Of Things</h5>
            <b>Technology:</b>April 21,2020
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
          <div className="Adv">
            <p>Advertistment</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
