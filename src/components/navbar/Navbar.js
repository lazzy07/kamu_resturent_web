import React, { Component } from "react";
import NavButton from "./NavButton";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";

import * as routes from "../../constants/routes";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: [true, false, false, false, false, false]
    };
  }

  setActive = activeElement => {
    let newArr = [false, false, false, false, false, false];
    newArr[activeElement] = true;
    this.setState({
      active: newArr
    });
  };

  componentWillMount() {
    if (this.props.active || this.props.active !== 10) {
      let newArr = [false, false, false, false, false, false];
      newArr[this.props.active] = true;
      this.setState({
        active: newArr
      });
    }
  }

  navStyles = {
    float: "left",
    paddingLeft: "2.6vw",
    paddingRight: "2.6vw"
  };
  navStyles2 = {
    float: "right",
    paddingRight: "1vw"
  };
  render() {
    return (
      <div
        id="navBarWrap"
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          height: "50px",
          boxShadow:
            "0 0px 5px rgba(0,0,0,0.2), 0 0 40px rgba(0,0,0,0.1) inset",
          backgroundColor: "#fff"
        }}
      >
        <div
          style={{
            height: "50px",
            padding: "14px 16px",
            width: "100%",
            textDecoration: "none",
            fontSize: "18px"
          }}
        >
          <Link to={routes.RESTURANT_OFFERS}>
            <div onClick={() => this.setActive(0)} style={this.navStyles}>
              <NavButton
                isActive={this.state.active[0]}
                icon="fa fa-tags fa-lg"
                text=""
              />
            </div>
          </Link>

          <Link to={routes.RESTURANT_FOOD}>
            <div onClick={() => this.setActive(1)} style={this.navStyles}>
              <NavButton
                isActive={this.state.active[1]}
                icon="fa fa-cutlery fa-lg"
                text=""
              />
            </div>
          </Link>

          <Link to={routes.RESTURANT_BOOKING}>
            <div onClick={() => this.setActive(2)} style={this.navStyles}>
              <NavButton
                isActive={this.state.active[2]}
                icon="fa fa-bookmark fa-lg"
                text=""
              />
            </div>
          </Link>

          <Link to={routes.RESTURANT_MESSAGING}>
            <div onClick={() => this.setActive(3)} style={this.navStyles}>
              <NavButton
                isActive={this.state.active[3]}
                icon="fa fa-comment fa-lg"
                text=""
              />
            </div>
          </Link>

          <Link to={routes.RESTURANT_NOTIFICATIONS}>
            <div onClick={() => this.setActive(4)} style={this.navStyles}>
              <NavButton
                isActive={this.state.active[4]}
                icon="fa fa-bell fa-lg"
                text=""
              />
            </div>
          </Link>

          <Link to={routes.RESTURANT_FOODMENU}>
            <div onClick={() => this.setActive(4)} style={this.navStyles}>
              <NavButton
                isActive={this.state.active[5]}
                icon="fa fa-list-ul fa-lg"
                text=""
              />
            </div>
          </Link>

          <div style={this.navStyles2}>
            <div className="dropdown">
              <div
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <Avatar image="/dependencies/pics/egg.jpg" />
              </div>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item">My Profile</a>
                <Link to={"/payment"}>
                  <span className="dropdown-item">Pay for Kamu</span>
                </Link>
                <a className="dropdown-item">Change Location</a>
                <a className="dropdown-item">Settings</a>
                <a className="dropdown-item">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
