import React, { Component } from "react";
import { PageHeader } from "antd";

class Header extends Component {
  render() {
    return (
      <PageHeader
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
    );
  }
}

export default Header;
