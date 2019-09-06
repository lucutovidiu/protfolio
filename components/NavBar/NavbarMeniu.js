import React from "react";
import Link from "next/link";
import { connect } from "react-redux";

class NavbarMeniu extends React.Component {
  constructor(props) {
    super(props);
    this.LogOut = this.LogOut.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.isAuthenticaticated === nextProps.isAuthenticaticated)
      return false;
    else return true;
  }

  LogOut() {
    this.props.logout();
  }

  // const isAuthenticaticated = useSelector(state => state.isAuthenticaticated);
  // console.log(isAuthenticaticated);

  btnRouteColor(routeName) {
    return this.props.tab === routeName
      ? { color: "#3498db" }
      : { color: "rgb(158, 155, 155)" };
  }
  // console.log(homeColorBtn);
  render() {
    return (
      <>
        <li>
          <Link href="/">
            <a style={this.btnRouteColor("Home")}>Home</a>
          </Link>
        </li>
        <li>
          <a href="/portfolios">
            <span style={this.btnRouteColor("Protfolios")}>Portfolios</span>
          </a>
        </li>
        {this.props.isAuthenticaticated ? (
          <li>
            <Link href="/portfolios/addNew">
              <a style={this.btnRouteColor("Add New Portfolio")}>
                Add New Portfolio
              </a>
            </Link>
          </li>
        ) : (
          ""
        )}
        <li>
          <Link href="/Contact" as="/Contact">
            <a style={this.btnRouteColor("Contact")}>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/About" as="/About">
            <a style={this.btnRouteColor("About")}>About</a>
          </Link>
        </li>
        <li>
          {this.props.isAuthenticaticated ? (
            <button
              style={{
                textDecoration: "none",
                fontSize: "1.4rem",
                color: "rgb(158, 155, 155)"
              }}
              className="btn a-button"
              onClick={this.LogOut}
            >
              Logout
            </button>
          ) : (
            <Link href="/Login" as="/Login">
              <a style={this.btnRouteColor("Login")}>Login</a>
            </Link>
          )}
        </li>
      </>
    );
  }
}
function mapStateToProps(state) {
  return { isAuthenticaticated: state.isAuthenticaticated };
}
function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch({ type: "LOGOUT" })
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarMeniu);
