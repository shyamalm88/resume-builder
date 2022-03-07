import React from "react";

const SoftSkill = (props) => {
  const softSkill = props.data.softSkill;
  console.log(softSkill);
  if (softSkill.length) {
    return (
      <div className="expertise">
        <h2>Soft Skills</h2>
        <ul>
          {softSkill.map((x, index) => {
            return (
              <li key={index} className="noRating onlyBorder">
                <span className="ellipsis">{x} </span>
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

export default SoftSkill;
