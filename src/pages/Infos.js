import React from "react";
import profilePic from "../assets/profile-pic.png";
const Infos = () => {
  return (
    <div className="infos">
      <div className="container-infos">
        <div className="infos-description">
          <h3>A propos de moi</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            iste eveniet dolore temporibus suscipit nihil voluptas, consectetur
            ipsam commodi quia accusamus, excepturi incidunt sapiente quo
            necessitatibus magnam tempora aperiam! Mollitia. Tempora tempore
            molestiae dolor a, quas excepturi impedit ratione tenetur magni
            aliquam ipsum? Nisi accusantium perspiciatis recusandae cupiditate,
            commodi voluptas optio reiciendis vel unde, suscipit similique
            soluta deserunt id facilis! Distinctio, totam veniam. Optio
          </p>
        </div>
        <div className="infos-picture">
          <img src={profilePic} alt="Photo de profil" />
        </div>
      </div>
    </div>
  );
};

export default Infos;
