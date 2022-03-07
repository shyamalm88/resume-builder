import React, { useState } from "react";
import NextBack from "../../common/next-back-buttons/nextBack";
import { Chips } from "primereact/chips";
import { useDispatch, useSelector } from "react-redux";
import { nextSummaryAction } from "../../actions/actions";

const Personality = () => {
  const dispatch = useDispatch();
  const softSkillData = useSelector((state) => state.selectedTabData.softSkill);
  const [softSkill, setSoftSkill] = useState(softSkillData);
  const updateData = () => {
    console.log(softSkill);
    dispatch(nextSummaryAction({ softSkill: softSkill }));
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="container-fluid">
              <h3 className="mb-3 mt-3">Tell us about your Soft Skills</h3>
              <p>Include every common skills or core skills.</p>
              <div className="row">
                <div className="col-sm-12 mb-3 mt-3">
                  <label htmlFor="skillName" className="form-label">
                    Common / Core Skills
                  </label>
                  <Chips
                    placeholder="e.g. Hard Working"
                    value={softSkill}
                    onChange={(e) => setSoftSkill(e.value)}
                  ></Chips>
                </div>
                {/* <ul className="skillList">
                  <li>
                    Angular <span className="pi pi-times-circle"></span>
                  </li>
                  <li>
                    React <span className="pi pi-times-circle"></span>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <NextBack
        nextTitle={"summary"}
        backTitle={"recognition"}
        onNext={() => updateData()}
        onBack={() => updateData()}
      />
    </React.Fragment>
  );
};

export default Personality;
