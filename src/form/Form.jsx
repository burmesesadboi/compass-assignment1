import { Component } from "react";
import "./Form.css";
import { FiSend } from "react-icons/fi";
import { frameworks, learningTypes, levels } from "../util/data";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      framework: "React",
      level: "Basic",
      learningType: ["Fundamentals"],
      feedbackDetails: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    return this.setState({
      [name]: value,
    });
  };

  handleCheck = (event) => {
    const { value, checked } = event.target;
    const { learningType } = this.state;

    // if (checked) {
    //   this.setState({
    //     learningType: [...learningType, value],
    //   });
    // } else {
    //   this.setState({
    //     learningType: learningType.filter((item) => item !== value),
    //   });
    // }

    checked
      ? this.setState({ learningType: [...learningType, value] })
      : this.setState({
          learningType: learningType.filter((item) => item !== value),
        });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted, successfully!");

    console.log("Check out this.state", this.state);
  };
  render() {
    // destructuring state (object)
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      framework,
      level,
      learningType,
      feedbackDetails,
    } = this.state;

    return (
      <div className="bgStyle">
        <form onSubmit={this.handleSubmit}>
          {/* input box တွေရေးတဲ့အခါ form tag ထဲမှာပဲရေးပေးရမယ်။ */}
          <div className="formStyle">
            <div className="sendCircle">
              <FiSend className="sendIcon" />
            </div>
            <p className="head">Hello!👋🏻</p>
            <div className="fullName">
              <div>
                <label className="label">First Name:</label>
                <br />
                <input
                  type="text"
                  value={firstName}
                  name="firstName"
                  onChange={this.handleChange} // don't forget to bind "this"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="label">Last Name:</label>
                <br />
                <input
                  type="text"
                  value={lastName}
                  name="lastName"
                  onChange={this.handleChange}
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="email">
              <label className="label">Email:</label>
              <br />
              <input
                type="email"
                value={email}
                name="email"
                onChange={this.handleChange}
                placeholder="Enter your email address"
              />
            </div>
            <div className="phoneNumber">
              <label className="label">Mobile Number:</label>
              <br />
              <input
                value={phoneNumber}
                type="number"
                name="phoneNumber"
                onChange={this.handleChange}
                placeholder="Enter your mobile number (eg. 0123456789)"
              />
            </div>

            <div className="frameworks">
              <label className="label">
                Which framework is that you are learning?
              </label>
              <br />
              <select
                value={framework}
                name="framework"
                onChange={this.handleChange}
              >
                {frameworks.map((framework) => (
                  <option key={framework.id}>{framework.value}</option>
                ))}
              </select>
            </div>

            <div className="levels">
              <label className="label">Level</label>
              <br />
              <div className="wrapper">
                {levels.map((el) => (
                  <div key={el.id} className="wrapperInner">
                    <input
                      type="radio"
                      name="level"
                      value={el.name}
                      onChange={this.handleChange}
                      // defaultChecked={level && el.name === level}
                      defaultChecked={el.name === level}
                    />
                    <label>{el.name}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="learningTypes">
              <label className="label">Learning Types</label>
              <br />
              <div className="wrapper">
                {learningTypes.map((el) => (
                  <div key={el.id} className="wrapperInner">
                    <input
                      type="checkbox"
                      name="learningType"
                      value={el.name}
                      // defaultChecked={
                      //   learningType && learningType.includes(el.name)
                      // } // returns ture or false
                      defaultChecked={learningType.includes(el.name)}
                      onChange={this.handleCheck}
                    />
                    <label>{el.name}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="detailsWrapper">
              <label className="label">Why do you like this?</label>
              <textarea
                rows="50"
                name="feedbackDetails"
                value={feedbackDetails}
                onChange={this.handleChange}
              ></textarea>
            </div>

            <div className="buttonWrapper">
              <button className="button" type="submit">
                SEND
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
