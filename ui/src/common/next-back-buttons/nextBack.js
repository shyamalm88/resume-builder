import React from "react";
import { useNavigate } from "react-router-dom";

const NextBack = (props) => {
  const navigate = useNavigate();

  const clickHandler = (title) => {
    switch (title) {
      case "work history":
        props.onNext();
        navigate("../work-history");
        break;
      case "theoretical":
        props.onNext();
        navigate("../theoretical");
        break;
      case "abilities":
        props.onNext();
        navigate("../abilities");
        break;
      case "recognition":
        props.onNext();
        navigate("../recognition");
        break;
      case "personality":
        props.onNext();
        navigate("../personality");
        break;
      case "summary":
        props.onNext();
        navigate("../summary");
        break;
      case "finalize":
        props.onNext();
        navigate("../finalize");
        break;
      default:
        navigate("../");
        break;
    }
  };
  const clickBackHandler = (title) => {
    switch (title) {
      case "work history":
        navigate("../work-history");
        break;
      case "theoretical":
        navigate("../theoretical");
        break;
      case "abilities":
        navigate("../abilities");
        break;
      case "recognition":
        navigate("../recognition");
        break;
      case "personality":
        navigate("../personality");
        break;
      case "summary":
        navigate("../summary");
        break;
      case "finalize":
        navigate("../finalize");
        break;
      case "finalizePrev":
        navigate("../summary");
        break;
      default:
        navigate("../");
        break;
    }
  };
  if (props.nextTitle && props.backTitle) {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 mb-3">
            <div className="px-3">
              <button
                className="btn btn-secondary float-start px-3 mt-3"
                onClick={() => clickBackHandler(props.backTitle)}
              >
                Back
              </button>
              <button
                className="btn btn-danger float-end px-5 mt-3"
                onClick={() => clickHandler(props.nextTitle)}
              >
                Next: <span className="text-capitalize">{props.nextTitle}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.backTitle) {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 mb-3">
            <div className="px-3">
              <button
                className="btn btn-secondary float-start px-3 mt-3"
                onClick={() => clickBackHandler(props.backTitle)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 mb-3">
            <div className="px-3">
              <button
                className="btn btn-danger float-end px-5 mt-3"
                onClick={() => clickHandler(props.nextTitle)}
              >
                Next: <span className="text-capitalize">{props.nextTitle}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NextBack;
