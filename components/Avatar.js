import React from "react";
import styled from "styled-components";

class AvatarComponent extends React.Component {
  state = {
    photo:
      "https://res.cloudinary.com/fyni/image/upload/v1583155296/avatar-default_mwdkp3.jpg"
  };

  componentDidMount() {
    fetch("https://uinames.com/api/?ext")
      .then(respose => respose.json())
      .then(respose => {
        console.log(respose);
        this.setState({
          photo: respose.photo
        });
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}
export default AvatarComponent;
const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 10px;
`;
