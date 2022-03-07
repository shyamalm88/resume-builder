import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import { connect, useDispatch, useSelector } from "react-redux";
import { nextAbilitiesAction } from "../../actions/actions";

const Education = (props) => {
  const educationData = useSelector(
    (state) => state.selectedTabData.theoretical.education
  );
  const addAnotherDegree = (e) => {
    e.preventDefault();
    console.log(education);
    setEducation((education) => [
      ...education,
      {
        id: Date.now(),
        schoolName: "",
        schoolLocation: "",
        degree: "",
        city: "",
        startDate: "",
        endDate: "",
      },
    ]);
    console.log(education);
  };
  const [education, setEducation] = useState(educationData);
  let today = new Date();
  return (
    <div className="container-fluid">
      <h3 className="mb-3 mt-3">Tell us about your Education</h3>
      <p>
        Include every school, even if you're still there or didn't graduate.
      </p>
      <div className="row">
        {education.map((ed) => {
          return (
            <React.Fragment key={ed.id}>
              <div className="col-sm-6 mb-3 mt-3">
                <label htmlFor="schoolName" className="form-label">
                  School / College / University Name
                </label>
                <input
                  type="text"
                  value={ed.schoolName}
                  onChange={(e) => {
                    const schoolName = e.target.value;
                    setEducation((edu) =>
                      edu.map((x) =>
                        x.id === ed.id
                          ? {
                              ...x,
                              schoolName,
                            }
                          : x
                      )
                    );
                  }}
                  onBlur={(e) => props.updateEduData(education)}
                  className="form-control"
                  id="schoolName"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-sm-6 mb-3 mt-3">
                <label htmlFor="schoolLocation" className="form-label">
                  School / College / University Location
                </label>
                <input
                  type="text"
                  value={ed.schoolLocation}
                  onChange={(e) => {
                    const schoolLocation = e.target.value;
                    setEducation((edu) =>
                      edu.map((x) =>
                        x.id === ed.id
                          ? {
                              ...x,
                              schoolLocation,
                            }
                          : x
                      )
                    );
                  }}
                  onBlur={(e) => props.updateEduData(education)}
                  className="form-control"
                  id="schoolLocation"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-sm-6 mb-3 mt-3">
                <label htmlFor="degree" className="form-label">
                  Degree
                </label>
                <input
                  type="text"
                  value={ed.degree}
                  onChange={(e) => {
                    const degree = e.target.value;
                    setEducation((edu) =>
                      edu.map((x) =>
                        x.id === ed.id
                          ? {
                              ...x,
                              degree,
                            }
                          : x
                      )
                    );
                  }}
                  onBlur={(e) => props.updateEduData(education)}
                  className="form-control"
                  id="degree"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-sm-6 mb-3 mt-3">
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  value={ed.city}
                  onChange={(e) => {
                    const city = e.target.value;
                    setEducation((edu) =>
                      edu.map((x) =>
                        x.id === ed.id
                          ? {
                              ...x,
                              city,
                            }
                          : x
                      )
                    );
                  }}
                  onBlur={(e) => props.updateEduData(education)}
                  className="form-control"
                  id="city"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-sm-3 mb-3 mt-3">
                <label htmlFor="startDate" className="form-label">
                  Start Date
                </label>
                <Calendar
                  maxDate={today}
                  value={ed.startDate}
                  onChange={(e) => {
                    const startDate = e.value;
                    setEducation((edu) =>
                      edu.map((x) =>
                        x.id === ed.id
                          ? {
                              ...x,
                              startDate,
                            }
                          : x
                      )
                    );
                  }}
                  onBlur={(e) => props.updateEduData(education)}
                ></Calendar>
              </div>
              <div className="col-sm-3 mb-3 mt-3">
                <label htmlFor="endDate" className="form-label">
                  End Date
                </label>
                <Calendar
                  maxDate={today}
                  value={ed.endDate}
                  onChange={(e) => {
                    const endDate = e.value;
                    setEducation((edu) =>
                      edu.map((x) =>
                        x.id === ed.id
                          ? {
                              ...x,
                              endDate,
                            }
                          : x
                      )
                    );
                  }}
                  onBlur={(e) => props.updateEduData(education)}
                ></Calendar>
              </div>
              <div className="clearfix"></div>
            </React.Fragment>
          );
        })}
        <div className="col-sm-12">
          <div className="px-0 mt-1">
            <button
              className="btn  float-start px-3 mb-4 btn-outline-primary btn-sm "
              onClick={(e) => addAnotherDegree(e)}
            >
              <span className="fa fa-plus"></span> Add Another Degree
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

export default connect(mapStateToProps, nextAbilitiesAction)(Education);
