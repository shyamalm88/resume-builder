import React, { useEffect, useState } from "react";
import axios from "axios";
import QuillEditor from "../../common/quill-editor/quill.editor";
import { AutoComplete } from "primereact/autocomplete";
import NextBack from "../../common/next-back-buttons/nextBack";
import _ from "lodash";
import "./summary.css";
import { nextFinalizeAction } from "../../actions/actions";
import { connect, useDispatch, useSelector } from "react-redux";

const Summary = (props) => {
  const summaryData = useSelector((state) => state.selectedTabData.summary);
  const dispatch = useDispatch();
  const [selectedSummary, setSelectedSummary] = useState({ name: "" });
  const [filteredSummary, setFilteredSummary] = useState([]);
  const [filteredSummaryExamples, setFilteredSummaryExamples] = useState([]);
  const [summary, setSummary] = useState(summaryData);

  const updateData = () => {
    console.log(summary);
    dispatch(nextFinalizeAction({ summary: summary }));
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "./data/suggestions.json",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => {
      setFilteredSummaryExamples(
        _.orderBy(
          _.filter(response.data.result, { tagType: "Default" }),
          ["text"],
          ["asc"]
        )
      );
      console.log(filteredSummaryExamples);
    });
  }, []);

  const searchSummary = (event) => {
    axios({
      method: "get",
      url: "./data/suggestions.json",
      params: {
        query: event.query,
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => {
      setFilteredSummary(
        _.orderBy(_.uniqBy(response.data.result, "name")),
        ["name"],
        ["desc"]
      );
    });
  };

  const getUpdatedSuggestions = (value) => {
    console.log(value);
    axios({
      method: "get",
      url: "./data/suggestions.json",
      params: {
        filter: value.name,
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((response) => {
      setFilteredSummaryExamples(
        _.orderBy(
          _.filter(response.data.result, { name: value.name }),
          ["name"],
          ["desc"]
        )
      );
      console.log(filteredSummaryExamples);
    });
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6 mb-3 mt-3">
                  <label htmlFor="skillName" className="form-label">
                    Summary Suggestion
                  </label>
                  <AutoComplete
                    value={selectedSummary}
                    minLength={3}
                    suggestions={filteredSummary}
                    completeMethod={searchSummary}
                    field="name"
                    onSelect={(e) => getUpdatedSuggestions(e.value)}
                    onChange={(e) => setSelectedSummary(e.value)}
                  />
                  <ul className="suggestions">
                    {filteredSummaryExamples.map((item) => {
                      return (
                        <li
                          key={item.contentItemUID}
                          dangerouslySetInnerHTML={{ __html: item.text }}
                          onClick={(e) => {
                            const data =
                              summary +
                              "<p></p><p>" +
                              e.target.innerHTML +
                              "</p>";
                            setSummary(data);
                          }}
                        ></li>
                      );
                    })}
                  </ul>
                </div>
                <div className="col-sm-6 mb-3 mt-3">
                  <QuillEditor
                    value={summary}
                    updateQuillData={(value) => {
                      setSummary(value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NextBack
        nextTitle={"finalize"}
        backTitle={"personality"}
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

export default connect(mapStateToProps, nextFinalizeAction)(Summary);
