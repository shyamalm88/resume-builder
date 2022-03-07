import React, { useRef, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { nextAbilitiesAction } from "../../actions/actions";
import NextBack from "../../common/next-back-buttons/nextBack";
import Certificates from "./certificates";
import Education from "./education";

const Theoretical = (props) => {
  const dispatch = useDispatch();
  const theoreticalData = useSelector(
    (state) => state.selectedTabData.theoretical
  );
  const [theoretical, setTheoretical] = useState(theoreticalData);

  const updateData = () => {
    console.log(theoretical);
    dispatch(nextAbilitiesAction({ theoretical: theoretical }));
  };

  const getUpdatedEduData = (data) => {
    let copyTheoretical = { ...theoretical };
    copyTheoretical["education"] = data;
    setTheoretical(copyTheoretical);
  };

  const getUpdatedCertData = (data) => {
    let copyTheoretical = { ...theoretical };
    copyTheoretical["certificates"] = data;
    setTheoretical(copyTheoretical);
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <form>
              <Education updateEduData={getUpdatedEduData} />
              <Certificates updateCertData={getUpdatedCertData} />
            </form>
          </div>
          <div className="col-sm-6"></div>
          <NextBack
            nextTitle={"abilities"}
            backTitle={"work history"}
            onNext={() => updateData()}
            onBack={() => updateData()}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { data: state.selectedTabData };
};

export default connect(mapStateToProps, nextAbilitiesAction)(Theoretical);
