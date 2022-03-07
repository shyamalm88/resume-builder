import React from "react";

const TechnicalSkills = (props) => {
  const technicalSkills = props.data.abilities.technicalSkills;
  console.log(technicalSkills);
  if (technicalSkills.length) {
    return (
      <div className="expertise">
        <h2>Technical Skills</h2>
        <ul>
          {technicalSkills.map((x) => {
            return (
              <li key={x.id}>
                <strong className="inline-block">{x.skillName} : </strong>
                <div className="block">
                  <small>{x.skillDescription}</small>
                </div>
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

export default TechnicalSkills;
