import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions/actions";

class Auth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "506073681407-26ck64sh22tagl165eadjjakhln16kme.apps.googleusercontent.com",
          scope: "profile",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  signInClick = () => {
    this.auth.signIn();
  };

  signOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    console.log(this.props.isSignedIn);
    if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.signOutClick}
          type="button"
          className="btn btn-danger"
        >
          <i className="fa fa-google px-2"></i>
          Signout
        </button>
      );
    } else {
      return (
        <button
          onClick={this.signInClick}
          type="button"
          className="btn btn-success"
        >
          <i className="fa fa-google px-2"></i>
          Signin With Google
        </button>
      );
    }
  }

  render() {
    return <React.Fragment>{this.renderAuthButton()}</React.Fragment>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(Auth);
