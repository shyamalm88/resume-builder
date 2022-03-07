import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { nextPersonalityAction } from "../../actions/actions";
import NextBack from "../../common/next-back-buttons/nextBack";

const Recognition = () => {
  const dispatch = useDispatch();
  const recognitionData = useSelector(
    (state) => state.selectedTabData.recognition
  );
  const [recognition, setRecognition] = useState(recognitionData);
  const [award, setAward] = useState(recognitionData.awards);
  const [achievements, setAchievements] = useState(
    recognitionData.achievements
  );
  const addAnotherAward = (e) => {
    e.preventDefault();
    console.log(award);
    setAward((award) => [
      ...award,
      {
        id: Date.now(),
        awardName: "",
        awardDescription: "",
      },
    ]);
    console.log(award);
  };
  const addAnotherAchievement = (e) => {
    e.preventDefault();
    setAchievements((achievements) => [
      ...achievements,
      {
        id: Date.now(),
        achievementName: "",
        achievementDescription: "",
      },
    ]);
    console.log(award);
  };

  const updateData = () => {
    console.log(recognition);
    dispatch(nextPersonalityAction({ recognition: recognition }));
  };

  const getUpdatedAwardData = (data) => {
    let copyRecognition = { ...recognition };
    copyRecognition["awards"] = data;
    console.log(data);
    setRecognition(copyRecognition);
  };

  const getUpdatedAchievementsData = (data) => {
    let copyRecognition = { ...recognition };
    copyRecognition["achievements"] = data;
    console.log(data);
    setRecognition(copyRecognition);
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="container-fluid">
              <h3 className="mb-3 mt-3">Tell us about your Honors / Awards</h3>
              <p>
                Include every school, even if you're still there or didn't
                graduate.
              </p>
              <div className="row">
                {award.map((aw) => {
                  return (
                    <React.Fragment key={aw.id}>
                      <div className="col-sm-12 mb-3 mt-3">
                        <label htmlFor="awardName" className="form-label">
                          Honors / Awards Name
                        </label>
                        <input
                          type="text"
                          value={aw.awardName}
                          onChange={(e) => {
                            const awardName = e.target.value;
                            setAward((awrd) =>
                              awrd.map((x) =>
                                x.id === aw.id
                                  ? {
                                      ...x,
                                      awardName,
                                    }
                                  : x
                              )
                            );
                          }}
                          onBlur={(e) => getUpdatedAwardData(award)}
                          className="form-control"
                          id="awardName"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-sm-12 mb-3 mt-3">
                        <label
                          htmlFor="awardDescription"
                          className="form-label"
                        >
                          Honors / Awards Description
                        </label>
                        <textarea
                          type="text"
                          value={aw.awardDescription}
                          onChange={(e) => {
                            const awardDescription = e.target.value;
                            setAward((awrd) =>
                              awrd.map((x) =>
                                x.id === aw.id
                                  ? {
                                      ...x,
                                      awardDescription,
                                    }
                                  : x
                              )
                            );
                          }}
                          onBlur={(e) => getUpdatedAwardData(award)}
                          className="form-control"
                          id="awardDescription"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </React.Fragment>
                  );
                })}

                <div className="col-sm-12">
                  <div className="px-0 mt-1">
                    <button
                      className="btn  btn-outline-primary btn-sm float-start px-3 mb-4"
                      onClick={(e) => addAnotherAward(e)}
                    >
                      <span className="fa fa-plus"></span> Add Another Honor /
                      Awards
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <h3 className="mb-3 mt-3">Tell us about your Achievements</h3>
              <p>
                Include every school, even if you're still there or didn't
                graduate.
              </p>
              <div className="row">
                {achievements.map((ac) => {
                  return (
                    <React.Fragment key={ac.id}>
                      <div className="col-sm-12 mb-3 mt-3">
                        <label htmlFor="achievementName" className="form-label">
                          Achievements Name
                        </label>
                        <input
                          type="text"
                          value={ac.achievementName}
                          onChange={(e) => {
                            const achievementName = e.target.value;
                            setAchievements((achv) =>
                              achv.map((x) =>
                                x.id === ac.id
                                  ? {
                                      ...x,
                                      achievementName,
                                    }
                                  : x
                              )
                            );
                          }}
                          onBlur={(e) =>
                            getUpdatedAchievementsData(achievements)
                          }
                          className="form-control"
                          id="achievementName"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-sm-12 mb-3 mt-3">
                        <label
                          htmlFor="achievementDescription"
                          className="form-label"
                        >
                          Achievements Description
                        </label>
                        <textarea
                          type="text"
                          value={ac.achievementDescription}
                          onChange={(e) => {
                            const achievementDescription = e.target.value;
                            console.log(achievementDescription);
                            setAchievements((achv) =>
                              achv.map((x) =>
                                x.id === ac.id
                                  ? {
                                      ...x,
                                      achievementDescription,
                                    }
                                  : x
                              )
                            );
                          }}
                          onBlur={(e) =>
                            getUpdatedAchievementsData(achievements)
                          }
                          className="form-control"
                          id="achievementDescription"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </React.Fragment>
                  );
                })}
                <div className="col-sm-12">
                  <div className="px-0 mt-1">
                    <button
                      className="btn  btn-outline-primary btn-sm float-start px-3 mb-4"
                      onClick={(e) => addAnotherAchievement(e)}
                    >
                      <span className="fa fa-plus"></span> Add Another
                      Achievement
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NextBack
        nextTitle={"personality"}
        backTitle={"abilities"}
        onNext={() => updateData()}
        onBack={() => updateData()}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { data: state.selectedTabData };
};

export default connect(mapStateToProps, nextPersonalityAction)(Recognition);
