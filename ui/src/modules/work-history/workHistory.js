import React, { useState } from "react";
import QuillEditor from "../../common/quill-editor/quill.editor";
import { Calendar } from "primereact/calendar";
import NextBack from "../../common/next-back-buttons/nextBack";
import { connect, useDispatch, useSelector } from "react-redux";
import { nextTheoreticalAction } from "../../actions/actions";

const WorkHistory = () => {
  const dispatch = useDispatch();
  const workHistoryData = useSelector(
    (state) => state.selectedTabData.workHistory
  );
  const addAnotherPosition = (e) => {
    e.preventDefault();
    console.log(workHistory);
    setWorkHistory((workHistory) => [
      ...workHistory,
      {
        id: Date.now(),
        jobTitle: "",
        employer: "",
        city: "",
        state: "",
        startDate: "",
        endDate: "",
        currentlyWorkHere: true,
        jobDescription: "",
      },
    ]);
    console.log(workHistory);
  };
  const [workHistory, setWorkHistory] = useState(workHistoryData);
  let today = new Date();

  const updateData = () => {
    console.log(workHistory);
    dispatch(nextTheoreticalAction({ workHistory: workHistory }));
  };

  return (
    <form>
      <div className="container-fluid">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="mb-3 mt-3 px-4">
                  Now, let's fill out your work history
                </h3>
                <p className="px-4">
                  Employers scan your resume for six seconds to decide if you're
                  a match. We'll suggest bullet points that make a great
                  impression.
                </p>
              </div>
            </div>
          </div>

          {workHistory.map((wh) => {
            return (
              <React.Fragment key={wh.id}>
                <div className="col-sm-6">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6 mb-3 mt-3">
                        <label htmlFor="jobTitle" className="form-label">
                          Job Title
                        </label>
                        <input
                          value={wh.jobTitle}
                          onChange={(e) => {
                            const jobTitle = e.target.value;
                            setWorkHistory((cwh) =>
                              cwh.map((x) =>
                                x.id === wh.id
                                  ? {
                                      ...x,
                                      jobTitle,
                                    }
                                  : x
                              )
                            );
                          }}
                          type="text"
                          className="form-control"
                          id="jobTitle"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-sm-6 mb-3 mt-3">
                        <label htmlFor="employer" className="form-label">
                          Employer
                        </label>
                        <input
                          value={wh.employer}
                          onChange={(e) => {
                            const employer = e.target.value;
                            setWorkHistory((cwh) =>
                              cwh.map((x) =>
                                x.id === wh.id
                                  ? {
                                      ...x,
                                      employer,
                                    }
                                  : x
                              )
                            );
                          }}
                          type="text"
                          className="form-control"
                          id="employer"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-sm-6 mb-3 mt-3">
                        <label htmlFor="city" className="form-label">
                          City
                        </label>
                        <input
                          value={wh.city}
                          onChange={(e) => {
                            const city = e.target.value;
                            setWorkHistory((cwh) =>
                              cwh.map((x) =>
                                x.id === wh.id
                                  ? {
                                      ...x,
                                      city,
                                    }
                                  : x
                              )
                            );
                          }}
                          type="text"
                          className="form-control"
                          id="city"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-sm-6 mb-3 mt-3">
                        <label htmlFor="state" className="form-label">
                          State
                        </label>
                        <input
                          value={wh.state}
                          onChange={(e) => {
                            const state = e.target.value;
                            setWorkHistory((cwh) =>
                              cwh.map((x) =>
                                x.id === wh.id
                                  ? {
                                      ...x,
                                      state,
                                    }
                                  : x
                              )
                            );
                          }}
                          type="text"
                          className="form-control"
                          id="state"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-sm-6 mb-3 mt-3">
                        <label htmlFor="startDate" className="form-label">
                          Start Date
                        </label>
                        <Calendar
                          maxDate={today}
                          value={wh.startDate}
                          onChange={(e) => {
                            const startDate = e.target.value;
                            setWorkHistory((cwh) =>
                              cwh.map((x) =>
                                x.id === wh.id
                                  ? {
                                      ...x,
                                      startDate,
                                    }
                                  : x
                              )
                            );
                          }}
                        ></Calendar>
                      </div>
                      <div className="col-sm-6 mb-3 mt-3">
                        <label htmlFor="endDate" className="form-label">
                          End Date
                        </label>
                        <Calendar
                          maxDate={today}
                          value={wh.endDate}
                          onChange={(e) => {
                            const endDate = e.target.value;
                            setWorkHistory((cwh) =>
                              cwh.map((x) =>
                                x.id === wh.id
                                  ? {
                                      ...x,
                                      endDate,
                                    }
                                  : x
                              )
                            );
                          }}
                        ></Calendar>
                        <div className="mb-3 form-check">
                          <input
                            value={wh.currentlyWorkHere}
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            I Currently Work Here
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 mt-2">
                  <label htmlFor="jobDescription" className="form-label">
                    Job Description
                  </label>
                  <QuillEditor
                    value={wh.jobDescription}
                    updateQuillData={(value) => {
                      const jobDescription = value;
                      setWorkHistory((cwh) =>
                        cwh.map((x) =>
                          x.id === wh.id
                            ? {
                                ...x,
                                jobDescription,
                              }
                            : x
                        )
                      );
                    }}
                  />
                </div>
              </React.Fragment>
            );
          })}
          <div className="col-sm-12">
            <div className="px-3">
              <button
                className="btn float-start px-3 mt-3 btn-outline-primary btn-sm "
                onClick={(e) => addAnotherPosition(e)}
              >
                <span className="fa fa-plus"></span> Add Another Position
              </button>
            </div>
          </div>
          <NextBack
            nextTitle={"theoretical"}
            backTitle={"home"}
            onNext={() => updateData()}
            onBack={() => updateData()}
          />
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { data: state.selectedTabData };
};

export default connect(mapStateToProps, nextTheoreticalAction)(WorkHistory);
