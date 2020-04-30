import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoginContext, { LoginConsumer } from "../context/LoginContext";
import NoData from "./NoData";
import UserAppsHeader from "./UserAppsHeader";
import plus from "../images/plus.png";
import UserInterviews from "./Interviews";
import PublicApps from "./PublicApps";

function showInterviews(component) {
  return component;
}

class UserApps extends Component {
  static contextType = LoginContext;

  state = {
    apps: [],
    user_id: this.context.user.user_id,
  };

  async getApps() {
    let user_id = this.state.user_id;
    console.log("user_id", user_id);

    const response = await fetch(
      `http://localhost:2000/applications/${user_id}`
    );
    const data = await response.json();
    return data;
  }

  async componentDidMount() {
    const apps = await this.getApps();

    this.setState({
      apps: apps,
    });
  }

  render() {
    let appsArray = this.state.apps;
    console.log("context", this.context);

    return (
      <>
        <UserAppsHeader />
        <h3> Your submitted application data:</h3>
        <p>
          <Link style={linkStyle} to={`/applicationform`}>
            <img src={plus} height="20" width="20" alt="add" />
            Application Form
          </Link>
        </p>
        <ul style={userApp}>
          {appsArray.length > 0 ? (
            appsArray.map((app) => (
              <li>
                {app.company_name}
                <br />
                City: {app.city}
                <br />
                Position: {app.position}
                <br />
                Postion description: {app.position_description}
                <br />
                Application Date: {app.application_date}
                <br />
                Offer Extended? {app.offer_extended}
                <br />
                <UserInterviews appData={app}></UserInterviews>
                <Link
                  style={linkStyle}
                  to={`/interviewentry/${app.id}/${app.company_id}`}
                >
                  Enter interview information{" "}
                </Link>
                <br />
                <br />
              </li>
            ))
          ) : (
            <li>
              <NoData />
            </li>
          )}
        </ul>
        <br />
        <PublicApps />
      </>
    );
  }
}
const userApp = {
  listStyle: "none",
};
const linkStyle = {
  color: "blue",
  textDecoration: "none",
};
export default UserApps;
