import React from "react";

const ProfileDetails = (props) => {
  const profileDetails = props.data.heading;
  const summary = props.data.summary;
  console.log(profileDetails);
  if (profileDetails) {
    return (
      <div className="workExp">
        <h1>
          {profileDetails.firstName} {profileDetails.lastName}
        </h1>
        <h4 className="profession">{profileDetails.profession}</h4>
        <p dangerouslySetInnerHTML={{ __html: summary }} className="my-3"></p>
        <div className="contactDetails my-4">
          <div className="resumeText float-start my-2">
            <i className="resumeIcon fa fa-envelope mx-2"></i>
            {profileDetails.email}
          </div>
          <div className="resumeText float-end my-2">
            <i className="resumeIcon fa fa-mobile mx-2"></i>
            {profileDetails.phone}
          </div>
          <div className="clearfix"></div>
          <div className="resumeText float-start my-2">
            <i className="resumeIcon fa fa-map-marker mx-2"></i>
            {profileDetails.city}
          </div>
          <div className="resumeText float-end my-2">
            <i className="resumeIcon fa fa-globe mx-2" aria-hidden="true"></i>
            {profileDetails.state}
          </div>
          <div className="clearfix"></div>
          <div className="resumeText float-start my-2">
            <i
              className="resumeIcon fa fa-location-arrow mx-2"
              aria-hidden="true"
            ></i>
            {profileDetails.zip}
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default ProfileDetails;
