import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import NextBack from "../../common/next-back-buttons/nextBack";
import { nextWorkHistoryAction } from "../../actions/actions";
import { useDispatch } from "react-redux";

const Heading = () => {
  const dispatch = useDispatch();
  const headingData = useSelector((state) => state.selectedTabData.heading);
  const [firstName, setFirstName] = useState(headingData.firstName);
  const [lastName, setLastName] = useState(headingData.lastName);
  const [profession, setProfession] = useState(headingData.profession);
  const [city, setCity] = useState(headingData.city);
  const [state, setState] = useState(headingData.state);
  const [zip, setZip] = useState(headingData.zip);
  const [phone, setPhone] = useState(headingData.phone);
  const [email, setEmail] = useState(headingData.email);

  const updateData = () => {
    const data = {
      firstName,
      lastName,
      profession,
      city,
      state,
      zip,
      phone,
      email,
    };
    dispatch(nextWorkHistoryAction({ heading: data }));
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <form>
              <div className="container">
                <h3 className="mb-3 mt-3">
                  What's the best way for employers to contact you?
                </h3>
                <p>We suggest including an email and phone number.</p>
                <div className="row">
                  <div className="col-sm-6 mb-3 mt-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      className="form-control"
                      id="firstName"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-sm-6 mb-3 mt-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      className="form-control"
                      id="lastName"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-sm-12 mb-3 mt-3">
                    <label htmlFor="profession" className="form-label">
                      Profession
                    </label>
                    <input
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                      type="text"
                      className="form-control"
                      id="profession"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-sm-6 mb-3 mt-3">
                    <label htmlFor="city" className="form-label">
                      City
                    </label>
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      type="text"
                      className="form-control"
                      id="city"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-sm-3 mb-3 mt-3">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <input
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      type="text"
                      className="form-control"
                      id="state"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-sm-3 mb-3 mt-3">
                    <label htmlFor="zip" className="form-label">
                      Zip Code
                    </label>
                    <input
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      type="text"
                      className="form-control"
                      id="zip"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-sm-6 mb-3 mt-3">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="text"
                      className="form-control"
                      id="phone"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="col-sm-6 mb-3 mt-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-6"></div>
          <NextBack
            nextTitle={"work history"}
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
  return { ...state, data: state.selectedTabData };
};

export default connect(mapStateToProps, nextWorkHistoryAction)(Heading);
