import React, { useState } from "react";
import { Slider } from "primereact/slider";
import { Rating } from "primereact/rating";

import "./skills.css";
import { connect, useSelector } from "react-redux";
import { nextRecognitionAction } from "../../actions/actions";

const Skills = (props) => {
  const skillsData = useSelector(
    (state) => state.selectedTabData.abilities.skills
  );
  const addAnotherSkill = (e) => {
    e.preventDefault();
    console.log(skills);
    setSkills((skills) => [
      ...skills,
      {
        id: Date.now(),
        skillName: "",
        skillRating: 0,
      },
    ]);
    console.log(skills);
  };

  const [skills, setSkills] = useState(skillsData);

  return (
    <div className="container-fluid">
      <h3 className="mb-3 mt-3">Tell us about your Skills</h3>
      <p>
        Include every school, even if you're still there or didn't graduate.
      </p>
      <div className="row">
        {skills.map((sk) => {
          return (
            <React.Fragment key={sk.id}>
              <div className="col-sm-6 mb-3 mt-3">
                <label htmlFor="skillRating" className="form-label">
                  Skill Rating
                </label>
                <div className="mt-3">
                  <Slider
                    value={sk.skillRating}
                    step={0.5}
                    max={5}
                    onChange={(e) => {
                      const skillRating = e.value;
                      setSkills((skl) =>
                        skl.map((x) =>
                          x.id === sk.id
                            ? {
                                ...x,
                                skillRating,
                              }
                            : x
                        )
                      );
                    }}
                    onBlur={(e) => props.updateSkillsData(skills)}
                  />
                  <h4 className="mt-3">{sk.skillRating * 20 || 0}</h4>
                </div>
              </div>
              <div className="col-sm-6 mb-3 mt-3">
                <label htmlFor="skillName" className="form-label">
                  Skill Name
                </label>
                <input
                  type="text"
                  value={sk.skillName}
                  onChange={(e) => {
                    const skillName = e.target.value;
                    setSkills((skl) =>
                      skl.map((x) =>
                        x.id === sk.id
                          ? {
                              ...x,
                              skillName,
                            }
                          : x
                      )
                    );
                  }}
                  onBlur={(e) => props.updateSkillsData(skills)}
                  className="form-control"
                  id="skillName"
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
              onClick={(e) => addAnotherSkill(e)}
            >
              <span className="fa fa-plus"></span> Add Another Skill
            </button>
          </div>
        </div>
        <div className="clearfix"></div>
        <ul className="skillList">
          {skills.map((sk) => {
            if (sk.skillName) {
              return (
                <li key={sk.id}>
                  <React.Fragment>
                    {sk.skillName}
                    <Rating value={sk.skillRating} cancel={false} stars={5} />
                    <span className="pi pi-times-circle"></span>
                  </React.Fragment>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { data: state.selectedTabData };
};

export default connect(mapStateToProps, nextRecognitionAction)(Skills);
