import React, { Component } from "react";
import { Animated } from "react-animated-css";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import axios from "axios";

import { FIREBASE_FUNCTION_URL } from "../../firebase/firebase";
import { doSignInWithEmailAndPassword, authUser } from "../../firebase/auth";

import "font-awesome/css/font-awesome.min.css";

import { InputBox } from "../../components/form/InputBox";
import Button from "../../components/button/Button";

import * as computerData from "../../animations/computer/data.json";
import * as stoveData from "../../animations/stove/data.json";
import * as ovenData from "../../animations/microwave/data.json";
import * as panData from "../../animations/pan_and_knife/data.json";
import {
  RESTURANT_LOGIN,
  RESTURANT_EMAIL_VERIFICATION
} from "../../constants/routes";

const computerOptions = {
  loop: true,
  autoplay: true,
  animationData: computerData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const stoveOptions = {
  loop: true,
  autoplay: true,
  animationData: stoveData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const ovenOptions = {
  loop: true,
  autoplay: true,
  animationData: ovenData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const panOptions = {
  loop: true,
  autoplay: true,
  animationData: panData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

class SignupScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "lasantha",
      userName: "@cyborgstudio",
      enterprise: "@cyborgs",
      email: "lazantha0@gmail.com",
      password: "12341234",
      confirmPassword: "12341234",
      city: "kandy",

      firstNameDescription: (
        <span style={this.descriptionStyles.normal}>
          Eg: Cyborg Studios Kandy
        </span>
      ),
      userNamedescription: (
        <span style={this.descriptionStyles.normal}>
          Eg: @cyborg_studios_kandy
        </span>
      ),
      enterpriseDescription: (
        <span style={this.descriptionStyles.normal}>
          eg: @cyborg_studios (If have one registered)
        </span>
      ),
      emailDescription: (
        <span style={this.descriptionStyles.normal}>
          Eg: cyborgstudios@cyborg.com
        </span>
      ),
      passwordDescription: (
        <span style={this.descriptionStyles.normal}>No spaces are allowed</span>
      ),
      confirmPasswordDescription: (
        <span style={this.descriptionStyles.normal} />
      ),
      cityDescription: (
        <span style={this.descriptionStyles.normal}>eg: Kandy</span>
      ),
      mainMessage: <span style={this.descriptionStyles.normal} />,

      loading: false
    };
  }

  sendSignupInfo = data => {
    try {
      axios
        .post(FIREBASE_FUNCTION_URL + "registerResturent", data, {
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => {
          this.setState({
            loading: false
          });

          if (res.status === 201) {
            this.setState({
              mainMessage: (
                <span style={this.descriptionStyles.warning}>{res.data}</span>
              )
            });
          }

          if (res.status === 202) {
            try {
              doSignInWithEmailAndPassword(
                this.state.email,
                this.state.password
              ).then(() => {
                let currentUser = authUser;
                currentUser
                  .sendEmailVerification()
                  .then(() => {
                    this.props.history.push(RESTURANT_EMAIL_VERIFICATION);
                  })
                  .catch(error => {
                    console.log(error);
                    this.setState({
                      mainMessage: (
                        <span style={this.descriptionStyles.warning}>
                          {error.message}
                        </span>
                      )
                    });
                  });
              });
            } catch (err) {
              console.log(err.message);
              this.setState({
                mainMessage: (
                  <span style={this.descriptionStyles.warning}>
                    {err.message}
                  </span>
                )
              });
            }
          }
        });
    } catch (err) {
      console.log(err);
      this.setState({
        mainMessage: (
          <span style={this.descriptionStyles.warning}>{err.message}</span>
        ),
        loading: false
      });
    }
  };

  removeLastLetterIfSpace = (stateKeyName, stateValue) => {
    let value = stateValue;
    if (stateValue.charAt(stateValue.length - 1) === " ") {
      value = stateValue.slice(0, stateValue.length - 1);
      this.setState({
        [stateKeyName]: value
      });
      return value;
    }

    return value;
  };

  removeFirstLetterIfSpace = (stateKeyName, stateValue) => {
    let value = stateValue;

    if (stateValue.charAt(0) === " ") {
      value = stateValue.slice(1, stateValue.length);
      this.setState({
        [stateKeyName]: value
      });
      return value;
    }
    return value;
  };

  removeSpaces = (stateKeyName, stateValue) => {
    let val1 = this.removeFirstLetterIfSpace(stateKeyName, stateValue);
    return this.removeLastLetterIfSpace(stateKeyName, val1);
  };

  signUpHandler = () => {
    this.setState({
      firstNameDescription: (
        <span style={this.descriptionStyles.normal}>
          Eg: Cyborg Studios Kandy
        </span>
      ),
      userNamedescription: (
        <span style={this.descriptionStyles.normal}>
          Eg: @cyborg_studios_kandy
        </span>
      ),
      enterpriseDescription: (
        <span style={this.descriptionStyles.normal}>
          eg: @cyborg_studios (If have one registered)
        </span>
      ),
      emailDescription: (
        <span style={this.descriptionStyles.normal}>
          Eg: cyborgstudios@cyborg.com
        </span>
      ),
      passwordDescription: (
        <span style={this.descriptionStyles.normal}>No spaces are allowed</span>
      ),
      confirmPasswordDescription: (
        <span style={this.descriptionStyles.normal} />
      ),
      cityDescription: (
        <span style={this.descriptionStyles.normal}>"eg: Kandy"</span>
      ),
      mainMessage: <span style={this.descriptionStyles.normal} />,

      loading: false
    });

    let uName = this.removeSpaces("userName", this.state.userName);
    let fName = this.removeSpaces("firstName", this.state.firstName);
    let email = this.removeSpaces("email", this.state.email);
    let eName = this.removeSpaces("enterprise", this.state.enterprise);
    let city = this.removeSpaces("city", this.state.city);

    if (this.state.loading === false) {
      if (fName.replace(/\s/g, "").length > 0) {
        if (uName.charAt(0) === "@") {
          if (uName.length >= 4 && uName.length <= 15) {
            if (uName.replace("@", "").indexOf("@") === -1) {
              let re = /^\w+$/;
              if (re.test(uName.replace("@", ""))) {
                if (email.length > 0) {
                  if (
                    email.replace("@", "").indexOf("@") === -1 &&
                    email.indexOf("@") !== -1
                  ) {
                    if (this.state.password.replace(/\s/g, "").length > 7) {
                      if (this.state.confirmPassword.length > 0) {
                        if (
                          this.state.confirmPassword === this.state.password
                        ) {
                          if (eName.charAt(0) === "@" || eName === "") {
                            if (city.length > 0) {
                              this.setState({
                                loading: true
                              });
                              const signupData = {
                                firstName: fName,
                                userName: uName,
                                email,
                                password: this.state.password,
                                city,
                                enterprise: eName
                              };
                              this.sendSignupInfo(signupData);
                            } else {
                              this.setState({
                                cityDescription: (
                                  <span style={this.descriptionStyles.warning}>
                                    City name can't be empty
                                  </span>
                                )
                              });
                            }
                          } else {
                            this.setState({
                              enterpriseDescription: (
                                <span style={this.descriptionStyles.warning}>
                                  Please enter a valid Enterprise Username
                                </span>
                              )
                            });
                          }
                        } else {
                          this.setState({
                            confirmPasswordDescription: (
                              <span style={this.descriptionStyles.warning}>
                                Password didn't match
                              </span>
                            )
                          });
                        }
                      } else {
                        this.setState({
                          confirmPasswordDescription: (
                            <span style={this.descriptionStyles.warning}>
                              This field can't be empty
                            </span>
                          )
                        });
                      }
                    } else {
                      this.setState({
                        passwordDescription: (
                          <span style={this.descriptionStyles.warning}>
                            Password must be atleast 8 characters long
                          </span>
                        )
                      });
                    }
                  } else {
                    this.setState({
                      emailDescription: (
                        <span style={this.descriptionStyles.warning}>
                          Plese enter a valid email address
                        </span>
                      )
                    });
                  }
                } else {
                  this.setState({
                    emailDescription: (
                      <span style={this.descriptionStyles.warning}>
                        Email can't be empty
                      </span>
                    )
                  });
                }
              } else {
                this.setState({
                  userNamedescription: (
                    <span style={this.descriptionStyles.warning}>
                      Username can only consists of '_', '@' at the front,
                      letters and numbers eg: @cyborgstudio_7
                    </span>
                  )
                });
              }
            } else {
              this.setState({
                userNamedescription: (
                  <span style={this.descriptionStyles.warning}>
                    Username can only consists of one @ at the front eg:
                    @lazzy_07
                  </span>
                )
              });
            }
          } else {
            this.setState({
              userNamedescription: (
                <span style={this.descriptionStyles.warning}>
                  Username must be between 4-15 characters
                </span>
              )
            });
          }
        } else {
          this.setState({
            userNamedescription: (
              <span style={this.descriptionStyles.warning}>
                Username must start with '@' eg: @lazzy07
              </span>
            )
          });
        }
      } else {
        this.setState({
          firstNameDescription: (
            <span style={this.descriptionStyles.warning}>
              First name can't be empty
            </span>
          )
        });
      }
    }
  };

  descriptionStyles = {
    warning: {
      color: "#e8232d"
    },
    normal: {
      color: "#7a7a7a"
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.signUpHandler();
  };

  render = () => {
    let loading = <span>&nbsp;&nbsp;</span>;

    if (this.state.loading) {
      loading = (
        <span>
          <i className="fa fa-spinner fa-spin" />
          &nbsp;
        </span>
      );
    }
    return (
      <Animated animationIn="fadeIn" isVisible={true}>
        <div style={{ paddingBottom: "10px" }}>
          <div
            style={{ position: "fixed", bottom: 100, left: 0, opacity: "0.8" }}
          >
            <Lottie
              options={computerOptions}
              height={"200px"}
              width={"200px"}
            />
          </div>
          <div
            style={{ position: "fixed", bottom: 0, left: 130, opacity: "0.8" }}
          >
            <Lottie options={stoveOptions} height={"300px"} width={"300px"} />
          </div>
          <div
            style={{
              position: "fixed",
              bottom: "250px",
              left: 0,
              opacity: "0.8"
            }}
          >
            <Lottie options={panOptions} height={"100px"} width={"100px"} />
          </div>
          <div
            style={{
              position: "fixed",
              bottom: 265,
              left: 150,
              opacity: "0.8"
            }}
          >
            <Lottie options={ovenOptions} height={"120px"} width={"120px"} />
          </div>
          <div
            className="offset-sm-2 offset-md-1 offset-lg-3 col-12 col-sm-8 col-md-10 col-lg-6"
            style={{
              boxShadow: "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1)",
              marginTop: "20px",
              padding: "20px",
              paddingBottom: "30px",
              overflow: "hidden",
              marginBottom: "20px",
              backgroundColor: "rgba(255,255,255,0.9)"
            }}
          >
            <div>
              <Animated animationIn="fadeIn" isVisible={true}>
                <div
                  style={{
                    color: "#7a7a7a",
                    paddingTop: "20px",
                    paddingBottom: "30px",
                    textAlign: "center"
                  }}
                >
                  <h1>
                    Kamu <span style={{ color: "#e8232d" }}>Signup</span>
                  </h1>
                  <h5 style={{ color: "#7a7a7a" }}>Resturant</h5>
                </div>
              </Animated>
            </div>
            <div>
              <form>
                <Animated
                  animationIn="fadeInRight"
                  animationInDelay={50}
                  isVisible={true}
                >
                  <InputBox
                    name="firstName"
                    label="Enter Name*"
                    type="text"
                    placeHolder="Enter Name"
                    description={this.state.firstNameDescription}
                    onChange={e => this.onChange(e)}
                    value={this.state.firstName}
                  />
                </Animated>
                <Animated
                  animationIn="fadeInRight"
                  animationInDelay={100}
                  isVisible={true}
                >
                  <InputBox
                    name="email"
                    label="Enter Email*"
                    type="email"
                    placeHolder="Enter Email"
                    description={this.state.emailDescription}
                    onChange={e => this.onChange(e)}
                    value={this.state.email}
                  />
                </Animated>
                <Animated
                  animationIn="fadeInRight"
                  animationInDelay={150}
                  isVisible={true}
                >
                  <InputBox
                    name="userName"
                    label="Enter Username*"
                    type="email"
                    placeHolder="Enter Username"
                    description={this.state.userNamedescription}
                    onChange={e => this.onChange(e)}
                    value={this.state.userName}
                  />
                </Animated>
                <Animated
                  animationIn="fadeInRight"
                  animationInDelay={200}
                  isVisible={true}
                >
                  <InputBox
                    name="password"
                    label="Enter Password*"
                    type="password"
                    placeHolder="Enter password"
                    description={this.state.passwordDescription}
                    onChange={e => this.onChange(e)}
                    value={this.state.password}
                  />
                </Animated>
                <Animated
                  animationIn="fadeInRight"
                  animationInDelay={250}
                  isVisible={true}
                >
                  <InputBox
                    name="confirmPassword"
                    label="Confirm Password*"
                    type="password"
                    placeHolder="Re-enter password"
                    description={this.state.confirmPasswordDescription}
                    onChange={e => this.onChange(e)}
                    value={this.state.confirmPassword}
                  />
                </Animated>
                <Animated
                  animationIn="fadeInRight"
                  animationInDelay={300}
                  isVisible={true}
                >
                  <InputBox
                    name="enterprise"
                    label="Enter Enterprise Name"
                    type="email"
                    placeHolder="Enter enterprise name"
                    description={this.state.enterpriseDescription}
                    onChange={e => this.onChange(e)}
                    value={this.state.enterprise}
                  />
                </Animated>
                <Animated
                  animationIn="fadeInRight"
                  animationInDelay={350}
                  isVisible={true}
                >
                  <InputBox
                    name="city"
                    label="City*"
                    type="text"
                    placeHolder="City of your resturant"
                    description={this.state.cityDescription}
                    onChange={e => this.onChange(e)}
                    value={this.state.city}
                  />
                </Animated>
                <Animated
                  animationIn="fadeInRight"
                  animationInDelay={350}
                  isVisible={true}
                >
                  <div style={{ margin: "10px", textAlign: "center" }}>
                    {this.state.mainMessage}
                  </div>
                </Animated>
                <Animated
                  animationIn="fadeInUp"
                  animationInDelay={400}
                  isVisible={true}
                >
                  <div className="row col-12 justify-content-center fadeIn">
                    <Button
                      onClick={e => this.onSubmit(e)}
                      text={
                        <span>
                          {loading}
                          <b>Signup</b>
                        </span>
                      }
                      type="submit"
                    />
                  </div>
                </Animated>
                <Animated
                  animationIn="fadeIn"
                  animationInDelay={500}
                  isVisible={true}
                >
                  <div style={{ paddingTop: "20px", textAlign: "center" }}>
                    <b>
                      Already have an account?&nbsp;
                      <Link to={RESTURANT_LOGIN} style={{ color: "#e8232d" }}>
                        <b className="icon">Login</b>
                      </Link>
                    </b>
                  </div>
                </Animated>
              </form>
            </div>
          </div>
        </div>
      </Animated>
    );
  };
}

export default SignupScreen;
