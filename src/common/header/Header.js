import React from "react";
import "./Header.css";
import logo from "../../assets/logo.svg";
import { Button } from "@material-ui/core";
import ReactModal from "react-modal";
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Tabs';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div className="header">
        <img src={logo} className="Header-logo" alt="logo"></img>

        <div className="button">
          {!isLoggedin && (
            <Button
              variant="contained"
              color="default"
              onClick={this.handleOpenModal}
            >
              Login
            </Button>
          )}
          {isLoggedin && (
            <Button variant="contained" color="default">
              Logout
            </Button>
          )}
          (
          <Button variant="contained" color="primary">
            Book Show
          </Button>
          )
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
         
        </ReactModal>
      </div>
    );
  }
}

const isLoggedin = false;

export default Header;