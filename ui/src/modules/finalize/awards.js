import React from "react";

const Awards = (props) => {
  const awards = props.data.recognition.awards;
  console.log(awards);
  if (awards.length) {
    return (
      <div className="expertise">
        <h2>Honors & Awards</h2>
        <ul>
          {awards.map((x) => {
            return (
              <li key={x.id}>
                <strong className="inline-block">{x.awardName} : </strong>
                <div className="block">
                  <small>{x.awardDescription}</small>
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

export default Awards;
