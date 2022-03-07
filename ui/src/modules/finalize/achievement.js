import React from "react";

const Achievements = (props) => {
  const awards = props.data.recognition.achievements;
  console.log(awards);
  if (awards.length) {
    return (
      <div className="expertise">
        <h2>Achievements</h2>
        <ul>
          {awards.map((x) => {
            return (
              <li key={x.id}>
                <strong className="inline-block">{x.achievementName} : </strong>
                <div className="block">
                  <small>{x.achievementDescription}</small>
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

export default Achievements;
