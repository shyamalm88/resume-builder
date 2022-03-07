import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextRecognitionAction } from "../../actions/actions";
import NextBack from "../../common/next-back-buttons/nextBack";
import Skills from "./skills";
import TechnicalSkills from "./technicalSkills";

const Abilities = () => {
  const dispatch = useDispatch();
  const abilitiesData = useSelector((state) => state.selectedTabData.abilities);
  const [abilities, setAbilities] = useState(abilitiesData);

  const updateData = () => {
    console.log(abilities);
    dispatch(nextRecognitionAction({ abilities: abilities }));
  };

  const getUpdatedSkillsData = (data) => {
    let copyAbilities = { ...abilities };
    copyAbilities["skills"] = data;
    setAbilities(copyAbilities);
  };

  const getUpdatedTechnicalSkillsData = (data) => {
    let copyAbilities = { ...abilities };
    copyAbilities["technicalSkills"] = data;
    setAbilities(copyAbilities);
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <Skills updateSkillsData={getUpdatedSkillsData} />
            <TechnicalSkills
              updateTechnicalSkillsData={getUpdatedTechnicalSkillsData}
            />
          </div>
          <NextBack
            nextTitle={"recognition"}
            backTitle={"theoretical"}
            onNext={() => updateData()}
            onBack={() => updateData()}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Abilities;
