import React from "react";
import moment from "moment";

const Certificates = (props) => {
  const certificates = props.data.theoretical.certificates;
  console.log(certificates);
  if (certificates.length) {
    return (
      <div className="expertise">
        <h2>Certification Details</h2>
        <ul>
          {certificates.map((x) => {
            return (
              <li key={x.id}>
                <strong className="inline-block">{x.certificateName} </strong>
                <span className="clearfix"></span>

                <small className="float-start">
                  <em>{moment(x.certificateValidFrom).format("DD/MM/YYYY")}</em>
                </small>
                <small className="float-end">
                  <em> {moment(x.certificateValidTo).format("DD/MM/YYYY")}</em>
                </small>
                <span className="clearfix"></span>
                <small className="inline-block">
                  {x.certificateDescription}
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

export default Certificates;
