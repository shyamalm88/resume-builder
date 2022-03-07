import React from "react";
import { Rating } from "primereact/rating";

const Expertise = (props) => {
  const skills = props.data.abilities.skills;
  console.log(skills);
  if (skills.length) {
    return (
      <div className="expertise">
        <h2>Key Expertise</h2>
        <ul>
          {skills.map((x) => {
            if (props.noRating) {
              return (
                <li key={x.id} className="noRating">
                  <span className="ellipsis">{x.skillName} </span>
                </li>
              );
            }
            return (
              <li key={x.id}>
                <span className="float-end">
                  <Rating value={x.skillRating} stars={5} cancel={false} />
                </span>
                <span className="ellipsis inline-block">{x.skillName} </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Expertise;
