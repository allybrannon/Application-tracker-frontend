import React, { Component } from "react";
import "../App.css";

const postAPI = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
  console.log(response);
  return response;
};

class ApplicationForm extends Component {
  state = {
    company_name: "",
    city: "",
    position: "",
    position_description: "",
    application_date: "",
    offer: "",
    makePublic: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    //e.preventDefault();

    try {
      const {
        company_name,
        city,
        position,
        description,
        date,
        offer,
        makePublic,
      } = this.state;

      const data = {
        company_name: company_name,
        city: city,
        position: position,
        position_description: description,
        application_date: date,
        offer_extended: offer,
        make_public: makePublic,
      };

      const url = "http://localhost:2000/userapplications";
      const response = await postAPI(url, data);

      if (response.status === 200) {
        alert("application data submitted");
      }
      if (response.status !== 200) {
        alert("Unable to submit application data.");
      }
    } catch (err) {
      return err;
    }
  };

  render() {
    const { company, city, position, description, date, offer, makePublic } = this.state;

    return (
      <div>
        <h1>Complete your application information.</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <input
            type="text"
            placeholder="company"
            onChange={this.handleChange}
            name="company_name"
            value={company}
            required
          />
          <br/>
          <input
            type="text"
            placeholder="city"
            onChange={this.handleChange}
            name="city"
            value={city}
            required
          />
          <br />
          <input
            type="text"
            placeholder="position"
            onChange={this.handleChange}
            name="position"
            value={position}
            required
          />
          <br />
          <input
            type="text"
            placeholder="job description"
            onChange={this.handleChange}
            name="position_description"
            value={description}
            required
          />
          <br />
          <input
            type="text"
            placeholder="applied date"
            onChange={this.handleChange}
            name="date"
            value={date}
            required
          />
          <br />
          <label>
            Job Offer?
            <input
              type="radio"
              placeholder="job offer?"
              onChange={this.handleChange}
              name="offer"
              value="Yes"
              checked={offer === "Yes"}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              placeholder="job offer?"
              onChange={this.handleChange}
              name="offer"
              value="No"
              checked={offer === "No"}
            />
            No
          </label>
          <label>
            <input
              type="radio"
              placeholder="job offer?"
              onChange={this.handleChange}
              name="offer"
              value="Nothing yet"
              checked={offer === "Nothing yet"}
            />
            Nothing Yet
          </label>
          <div>
            <label>
              Make Info Public?
              <input
                type="radio"
                name="makePublic"
                value="Yes"
                checked={makePublic === "Yes"}
                onChange={this.handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="makePublic"
                value="No"
                checked={makePublic === "No"}
                onChange={this.handleChange}
              />
              No
            </label>
          </div>
          <button type="submit" data-testid="submitButton">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ApplicationForm;