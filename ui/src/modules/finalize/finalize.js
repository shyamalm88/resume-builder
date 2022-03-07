import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NextBack from "../../common/next-back-buttons/nextBack";
import "./finalize.css";
import Expertise from "./experties";
import TechnicalSkills from "./technicalSkills";
import Education from "./education";
import Certificates from "./certificates";
import SoftSkill from "./softSkill";
import Awards from "./awards";
import Achievements from "./achievement";
import ProfileDetails from "./profileDetails";
import WorkExperience from "./workExperience";

const Finalize = () => {
  const dispatch = useDispatch();
  const printResume = () => {
    window.print();
  };
  const summaryData = useSelector((state) => state.selectedTabData);

  const updateData = () => {};
  return (
    <div className="resume my-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <div className="sidebar">
              <Expertise data={summaryData} noRating={true} />
              <TechnicalSkills data={summaryData} />
              <Education data={summaryData} />
              <Certificates data={summaryData} />
              <SoftSkill data={summaryData} />
              <Awards data={summaryData} />
              <Achievements data={summaryData} />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="main">
              <ProfileDetails data={summaryData} />
              <WorkExperience data={summaryData} />
            </div>
          </div>
        </div>
        <button
          className="btn  btn-success my-3 float-end"
          onClick={() => printResume()}
        >
          <i className="fa fa-print mx-2" aria-hidden="true"></i>
          Print
        </button>
        <div className="fixMargin" style={{ marginLeft: "-40px" }}>
          <NextBack
            backTitle={"finalizePrev"}
            onNext={() => updateData()}
            onBack={() => updateData()}
          />
        </div>
      </div>
    </div>
  );
};

export default Finalize;
