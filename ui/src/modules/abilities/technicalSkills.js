import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import { nextRecognitionAction } from "../../actions/actions";

const TechnicalSkills = (props) => {
  const technicalSkillsData = useSelector(
    (state) => state.selectedTabData.abilities.technicalSkills
  );

  const addAnotherTechnicalSkill = (e) => {
    e.preventDefault();
    console.log(technicalSkills);
    setTechnicalSkills((technicalSkills) => [
      ...technicalSkills,
      {
        id: Date.now(),
        skillName: "",
        skillDescription: "",
      },
    ]);
    console.log(technicalSkills);
  };

  const [technicalSkills, setTechnicalSkills] = useState(technicalSkillsData);

  return (
    <div className="container-fluid">
      <h3 className="mb-3 mt-3">Tell us about your Technical Skills</h3>
      <p>
        Include every school, even if you're still there or didn't graduate.
      </p>
      <div className="row">
        {technicalSkills.map((ce) => {
          return (
            <React.Fragment key={ce.id}>
              <div className="col-sm-12 mb-3 mt-3">
                <label htmlFor="skillName" className="form-label">
                  Skill Name
                </label>
                <input
                  type="text"
                  value={ce.skillName}
                  onChange={(e) => {
                    const skillName = e.target.value;
                    setTechnicalSkills((cert) =>
                      cert.map((x) =>
                        x.id === ce.id
                          ? {
                              ...x,
                              skillName,
                            }
                          : x
                      )
                    );
                  }}
                  onBlur={(e) =>
                    props.updateTechnicalSkillsData(technicalSkills)
                  }
                  className="form-control"
                  id="skillName"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-sm-12 mb-3 mt-3">
                <label htmlFor="skillDescription" className="form-label">
                  Skill Description
                </label>
                <textarea
                  type="text"
                  value={ce.skillDescription}
                  onChange={(e) => {
                    const skillDescription = e.target.value;
                    setTechnicalSkills((cert) =>
                      cert.map((x) =>
                        x.id === ce.id
                          ? {
                              ...x,
                              skillDescription,
                            }
                          : x
                      )
                    );
                  }}
                  onBlur={(e) =>
                    props.updateTechnicalSkillsData(technicalSkills)
                  }
                  className="form-control"
                  id="skillDescription"
                  aria-describedby="emailHelp"
                />
              </div>
            </React.Fragment>
          );
        })}

        <div className="col-sm-12">
          <div className="px-0 mt-1">
            <button
              className="btn btn-outline-primary btn-sm float-start px-3 mb-4"
              onClick={(e) => addAnotherTechnicalSkill(e)}
            >
              <span className="fa fa-plus"></span> Add Another Technical Skill
              Set
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

export default connect(mapStateToProps, nextRecognitionAction)(TechnicalSkills);
