import { Component } from "react";
import "./Form.css";
import { FiSend } from "react-icons/fi";
import { frameworks, learningTypes, levels } from "../util/data";

export default class Form extends Component {
  render() {
    return (
      <div className="bgStyle">
        <form>
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
                  name="firstName"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="label">Last Name:</label>
                <br />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="email">
              <label className="label">Email:</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="phoneNumber">
              <label className="label">Mobile Number:</label>
              <br />
              <input
                type="number"
                name="number"
                placeholder="Enter your mobile number (eg. 0123456789)"
              />
            </div>

            <div className="frameworks">
              <label className="label">
                Which framework is that you are learning?
              </label>
              <br />
              <select>
                {frameworks.map((framework) => (
                  <option key={framework.id} value={framework.value}>
                    {framework.value}
                  </option>
                ))}
              </select>
            </div>

            <div className="levels">
              <label className="label">Level</label>
              <br />
              <div className="wrapper">
                {levels.map((level) => (
                  <div
                    key={level.id}
                    value={level.name}
                    className="wrapperInner"
                  >
                    <input type="radio" name="level" />
                    <label>{level.name}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="learningTypes">
              <label className="label">Learning Types</label>
              <br />
              <div className="wrapper">
                {learningTypes.map((learningType) => (
                  <div
                    key={learningType.id}
                    value={learningType.name}
                    className="wrapperInner"
                  >
                    <input type="checkbox" />
                    <label>{learningType.name}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="details">
              <label className="label">Why do you like this?</label>
              <textarea rows="50"></textarea>
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
