import React, { useState, useEffect } from "react";
import { Chrono } from "react-chrono";
import { useInView } from "react-intersection-observer";
import "aos/dist/aos.css";
import AOS from "aos";
const Timeline = () => {
  const items = [
    {
      title: "Septembre 2022",
      cardTitle: "Reconversion developpeur web",
      cardSubtitle:
        "Reconversion développeur web avec l'organisme Openclassrooms.",
      cardDetailedText: ``,
    },
    {
      title: "Aout 2021",
      cardTitle: "Food truck au Mexique",
      cardSubtitle:
        "Ouverture d'un food truck à Cancun au Mexique. Projet qui aura duré 6 mois. ",
      cardDetailedText: ``,
    },
    {
      title: "Octobre 2020",
      cardTitle: "Visa vacance travail Australie",
      cardSubtitle: `10 mois en australie qui m'auront permis d'améliorer mon anglais ainsi que de travailler dans plusieurs domaines de manutention `,
      cardDetailedText: ``,
    },
    {
      title: "Septembre 2017",
      cardTitle: "Boucher",
      cardSubtitle: `Préparation d'un Cap boucher ou j'aurai eu l'occasion de travailler 3 ans dans une boucherie.`,
      cardDetailedText: ``,
    },
    {
      title: "Avril 2014",
      cardTitle: "Armée de terre",
      cardSubtitle: `Spécialisé dans l'artillerie, nottement sur les mortiers 120 et canon CAESAR j'ai éfféctué une mission en Côte d'ivoire et 5 sentinelles `,
      cardDetailedText: ``,
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
            showAllCardsHorizontal={true}
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
    </div>
  );
};

export default Timeline;
