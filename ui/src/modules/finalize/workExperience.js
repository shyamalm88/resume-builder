import React from "react";
import moment from "moment";

const WorkExperience = (props) => {
  const workHistory = props.data.workHistory;
  console.log(workHistory);
  if (workHistory.length) {
    return (
      <div className="workHistory">
        <h2>Work Experience</h2>
        <ul>
          {workHistory.map((x, index) => {
            return (
              <li key={index} className="mt-4">
                <h2
                  className="mt-4"
                  style={{ color: "#333", fontSize: "24px" }}
                >
                  {x.jobTitle}{" "}
                </h2>
                <h3
                  className=""
                  style={{
                    color: "#333",
                    fontSize: "20px",
                    fontWeight: "normal",
                  }}
                >
                  {x.employer}{" "}
                </h3>
                <small
                  className="float-start"
                  style={{
                    color: "#40b281",
                  }}
                >
                  {x.city},{" "}
                </small>
                <small
                  className="float-start"
                  style={{
                    color: "#40b281",
                  }}
                >
                  {x.state}{" "}
                </small>
                <small className="float-end">
                  <em
                    style={{
                      color: "#40b281",
                    }}
                  >
                    {moment(x.startDate).format("DD/MM/YYYY")} -
                    {moment(x.endDate).format("DD/MM/YYYY")}
                  </em>
                </small>

                <div className="clearfix"></div>

                <div className="clearfix"></div>
                <h4
                  className="mt-4"
                  style={{
                    color: "#40b281",
                  }}
                >
                  Work Profile
                </h4>
                <p
                  dangerouslySetInnerHTML={{ __html: x.jobDescription }}
                  className="my-3"
                ></p>
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

export default WorkExperience;
