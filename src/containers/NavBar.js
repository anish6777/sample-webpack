import React, { Component } from 'react'
import Navbar from "./../components/navbar/Navbar";


class Nav extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
      </>
    )
  }
}

export default Nav

