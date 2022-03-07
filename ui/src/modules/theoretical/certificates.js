import { Calendar } from "primereact/calendar";
import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { nextAbilitiesAction } from "../../actions/actions";
import QuillEditor from "../../common/quill-editor/quill.editor";

const Certificates = (props) => {
  const certificationData = useSelector(
    (state) => state.selectedTabData.theoretical.certificates
  );
  const addAnotherCertificate = (e) => {
    e.preventDefault();
    console.log(certification);
    setCertification((certification) => [
      ...certification,
      {
        id: Date.now(),
        certificateName: "",
        certificateValidFrom: "",
        certificateValidTo: "",
        certificateDescription: "",
      },
    ]);
    console.log(certification);
  };
  const [certification, setCertification] = useState(certificationData);
  let today = new Date();

  return (
    <div className="container-fluid">
      <h3 className="mb-3 mt-3">Tell us about your Certifications</h3>
      <p>
        Include every school, even if you're still there or didn't graduate.
      </p>
      <div className="row">
        {certification.map((ce) => {
          return (
            <React.Fragment key={ce.id}>
              <div className="col-sm-12 mb-3 mt-3">
                <label htmlFor="certificateName" className="form-label">
                  Certificate Name
                </label>
                <input
                  type="text"
                  value={ce.certificateName}
                  onChange={(e) => {
                    const certificateName = e.target.value;
                    setCertification((cert) =>
                      cert.map((x) =>
                        x.id === ce.id
                          ? {
                              ...x,
                              certificateName,
                            }
                          : x
                      )
                    );
                  }}
                  onBlur={(e) => props.updateCertData(certification)}
                  className="form-control"
                  id="certificateName"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-sm-6 mb-3 mt-3">
                <label htmlFor="certificateValidFrom" className="form-label">
                  Certificate Valid From
                </label>
                <Calendar
                  maxDate={today}
                  value={ce.certificateValidFrom}
                  onChange={(e) => {
                    const certificateValidFrom = e.target.value;
                    setCertification((cert) =>
                      cert.map((x) =>
                        x.id === ce.id
                          ? {
                              ...x,
                              certificateValidFrom,
                            }
                          : x
                      )
                    );
                  }}
                  onBlur={(e) => props.updateCertData(certification)}
                ></Calendar>
              </div>
              <div className="col-sm-6 mb-3 mt-3">
                <label htmlFor="certificateValidTo" className="form-label">
                  Certificate Valid To
                </label>
                <Calendar
                  maxDate={today}
                  value={ce.certificateValidTo}
                  onChange={(e) => {
                    const certificateValidTo = e.value;
                    setCertification((cert) =>
                      cert.map((x) =>
                        x.id === ce.id
                          ? {
                              ...x,
                              certificateValidTo,
                            }
                          : x
                      )
                    );
                  }}
                  onBlur={(e) => props.updateCertData(certification)}
                ></Calendar>
              </div>
              <div className="col-sm-12 mb-3 mt-3">
                <label htmlFor="certificateDescription" className="form-label">
                  Certificate Description
                </label>
                <textarea
                  type="text"
                  value={ce.certificateDescription}
                  onChange={(e) => {
                    const certificateDescription = e.target.value;
                    setCertification((cert) =>
                      cert.map((x) =>
                        x.id === ce.id
                          ? {
                              ...x,
                              certificateDescription,
                            }
                          : x
                      )
                    );
                  }}
                  onBlur={(e) => props.updateCertData(certification)}
                  className="form-control"
                  id="certificateDescription"
                  aria-describedby="emailHelp"
                />
              </div>
            </React.Fragment>
          );
        })}

        <div className="col-sm-12">
          <div className="px-0 mt-1">
            <button
              className="btn float-start px-3 mb-4 btn-outline-primary btn-sm "
              onClick={(e) => addAnotherCertificate(e)}
            >
              <span className="fa fa-plus"></span> Add Another Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { data: state.selectedTabData };
};

export default connect(mapStateToProps, nextAbilitiesAction)(Certificates);
