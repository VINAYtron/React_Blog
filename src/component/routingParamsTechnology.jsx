import React from "react";
import { useParams } from "react-router-dom";

const RoutingParamsTechnology = () => {
  const params = useParams();
  console.log(params);

  const getDynamicData = () => {
    const { tech } = params;
    if (tech === "cybersecurity") {
      return (
        <>
          <div className="detailItem">
            <img
              className="mainImgCont"
              src="https://www.ict.eu/sites/corporate/files/images/Cyber%20security%20header_1920x1280px%20%281%29.jpg"
              alt="cyberecurity"
            />
            <h4>CyberSecurity:</h4>
            <p>
              Cybersecurity is the protection of internet-connected systems such
              as hardware, software and data from cyberthreats. The practice is
              used by individuals and enterprises to protect against
              unauthorized access to data centers and other computerized
              systems.
            </p>
            <p>
              As a cybersecurity analyst, you’re tasked with protecting your
              company’s hardware, software, and networks from theft, loss, or
              unauthorized access. At a small company or organization, you might
              expect to perform a variety of cybersecurity tasks. At larger
              organizations, you might specialize as one part of a larger
              security team.{" "}
            </p>
          </div>
        </>
      );
    } else if (tech === "blockchain") {
      return (
        <div className="detailItem">
          <h4>BlockChain</h4>
          <img
            className="mainImgCont"
            src="https://www.capgemini.com/au-en/wp-content/uploads/sites/9/2018/04/clockchain-7.png"
            alt="Block Chain"
          />
          <p>
            a blockchain is a digital ever-growing list of data records. Such a
            list is comprised of many blocks of data, which are organized in
            chronological order and are linked and secured by cryptographic
            proofs.
          </p>
          <p>
            A blockchain is essentially a digital ledger of transactions that is
            duplicated and distributed across the entire network of computer
            systems on the blockchain. Each block in the chain contains a number
            of transactions, and every time a new transaction occurs on the
            blockchain, a record of that transaction is added to every
            participant’s ledger. The decentralised database managed by multiple
            participants is known as Distributed Ledger Technology (DLT).
          </p>
        </div>
      );
    } else if (tech === "artificialIntelligence") {
      return (
        <div className="detailItem">
          <h4>Artificial Intelligence and Machine Learinig</h4>
          <img
            className="mainImgCont"
            src="https://static.javatpoint.com/tutorial/machine-learning/images/ai-vs-machine-learning.png"
            alt="Karnataka"
          />

          <p>
            Artificial Intelligence is the science and engineering of making
            intelligent machines, especially intelligent computer programs.
            Artificial Intelligence is related to the similar task of using
            computers to understand human intelligence.
          </p>
          <p>
            The ideal characteristic of artificial intelligence is its ability
            to rationalize and take actions that have the best chance of
            achieving a specific goal. A subset of artificial intelligence is
            machine learning, which refers to the concept that computer programs
            can automatically learn from and adapt to new data without being
            assisted by humans. Deep learning techniques enable this automatic
            learning through the absorption of huge amounts of unstructured data
            such as text, images, or video.
          </p>
        </div>
      );
    } else if (tech === "internetofthings") {
      return (
        <div className="detailItem">
          <h4>Internet Of Things</h4>
          <img
            className="mainImgCont"
            src="https://www.zdnet.com/a/img/resize/cfc4b83ef647bebfba629ae1f5d215d412895eba/2020/09/28/6b225a1a-381a-4ceb-b13c-d2d314d41bd7/what-is-the-iot-everything-you-need-to-k-5f6cc13d5f60de4b41b7f3d4-1-sep-28-2020-16-19-38-poster.jpg?auto=webp&fit=cover&height=482&width=856"
            alt="Sikkim"
          />
          <p>
            The Internet of Things (IoT) describes physical objects (or groups
            of such objects) with sensors, processing ability, software, and
            other technologies that connect and exchange data with other devices
            and systems over the Internet or other communications networks.
          </p>
        </div>
      );
    } else if (tech === "cryptography") {
      return (
        <div className="detailItem">
          <h4>Cryptography</h4>
          <img
            className="mainImgCont"
            src="https://img.electronicdesign.com/files/base/ebm/electronicdesign/image/2020/05/PROMOCryptographyHandbook_Ch5.5eceabbf11917.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630"
            alt="Punjab"
          />
          <p>
            Cryptography is the science of protecting information by
            transforming it into a secure format. This process, called
            encryption, has been used for centuries to prevent handwritten
            messages from being read by unintended recipients
          </p>
        </div>
      );
    }
  };
  return <>{getDynamicData()}</>;
};
export default RoutingParamsTechnology;
