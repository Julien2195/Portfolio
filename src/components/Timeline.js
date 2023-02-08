import React, { useState, useEffect } from "react";
import { Chrono } from "react-chrono";
import { useInView } from "react-intersection-observer";
import curriculum from "../assets/CV_Lemaitre_Julien.pdf";
import "aos/dist/aos.css";
import AOS from "aos";
const Timeline = () => {
  const items = [
    {
      title: "2022",
      cardTitle: "Reconversion developpeur web",
      cardSubtitle: `Reconversion développeur web avec l'organisme Openclassrooms.`,
      cardDetailedText: ``,
    },

    {
      title: "2021-2022",
      cardTitle: "Visa vacance travail Australie",
      cardSubtitle: ` `,
      cardDetailedText: `Le programme PVT m'aura permis de découvrir une nouvelle culture, des personnes
      du monde entier, d'apprendre l'anglais et de débloquer de nouveaux soft skills tel que
      l'entraide, savoir prendre des décisions et l'autonomie.
      Travail dans les fermes, parqueteur, couvreur et travail dans le bâtiment`,
    },
    {
      title: "2018-2021",
      cardTitle: "Boucher",
      cardSubtitle: ``,
      cardDetailedText: `Découpe, préparation et mise en vente.
      Commerçant et conseils culinaires.
      Respects des règles de sécurité et de la chaine du froid`,
    },
    {
      title: "201-2018",
      cardTitle: "Armée de terre",
      cardSubtitle: ``,
      cardDetailedText: `Spécialisé dans l'artillerie sur les mortiers 120 mm et sur les canons CAESAR en tant
      qu'artificier.
      Mission de 5 mois en Côte d'Ivoire dans le but de faire des entrainements, de former
      les forces Ivoiriennes et de faire de l'humanitaire dans tout le pays.
      Opération Sentinelles qui consiste à protéger les points sensibles en France. J'ai été
      déployé à Lyon, Paris, Marseille x2, Pau et Bayonne.
      `,
    },
  ];
  const [timelineIsVisible, timelineSetIsVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  AOS.init();
  useEffect(() => {
    timelineSetIsVisible(inView);
  }, [inView]);
  return (
    <div
      className="aos-flip"
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <div ref={ref}>
        {timelineIsVisible && (
          <Chrono
            items={items}
            mode="VERTICAL_ALTERNATING"
            cardHeight={140}
            theme={{
              primary: "#ffbb33",
              secondary: "#ffbb33",
              titleColor: "#fff",
              titleColorActive: "#830000",
              fontWeight: 500,
            }}
            showAllCardsHorizontal={false}
            disableClickOnCircle={true}
            hideControls={true}
            timelineCircleDimension={30}
            classNames={{
              card: "my-card no-padding",
              cardTitle: "my-card-title",
              cardSubTitle: "my-card-subtitle",
              title: "my-title",
            }}
            fontSizes={{ cardTitle: "17px", cardSubtitle: "14px" }}
          >
            <div></div>
          </Chrono>
        )}
      </div>
      <a href={curriculum} download>
        <div className="button-cv">Télecharge mon CV</div>
      </a>
    </div>
  );
};

export default Timeline;
