import React from "react";
import moment from "moment";

const Education = (props) => {
  const education = props.data.theoretical.education;
  console.log(education);
  if (education.length) {
    return (
      <div className="expertise">
        <h2>Education Details</h2>
        <ul>
          {education.map((x) => {
            return (
              <li key={x.id}>
                <strong className="inline-block">{x.schoolName} </strong>
                <span className="clearfix"></span>
                <small className="float-start">{x.schoolLocation}, </small>
                <small className="float-start"> {x.city}</small>
                <small className="float-end">{x.degree}</small>
                <span className="clearfix"></span>
                <small className="float-start">
                  <em>{moment(x.startDate).format("DD/MM/YYYY")}</em>
                </small>
                <small className="float-end">
                  <em> {moment(x.endDate).format("DD/MM/YYYY")}</em>
                </small>
                <span className="clearfix"></span>
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

export default Education;
