
import React from "react";

function WhyDukaanCard({ flexD, imgUrl, heading, paragraphs, iconImg }) {
  return (
    <div className="why-dukkan-card" style={{ flexDirection: flexD }}>
      <div className="why-dukaan-left">
        <img src={imgUrl} alt="" />
      </div>
      <div className="why-dukaan-right">
        <h3>{heading}</h3>

        {paragraphs.map((p, i) => {
          return (
            <p key={i}>
              <img src={iconImg} alt="" />
              {p}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default WhyDukaanCard;
