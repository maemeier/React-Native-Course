import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name,
    surname: state.surname
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name: name
      })
  };
}
class AvatarComponent extends React.Component {
  state = {
    photo:
      "https://res.cloudinary.com/fyni/image/upload/v1583155296/avatar-default_mwdkp3.jpg"
  };

  componentDidMount() {
    fetch("https://uinames.com/api/?ext&gender=female&region=germany")
      .then(respose => respose.json())
      .then(respose => {
        console.log(respose);
        this.setState({
          photo: respose.photo
        });
        this.props.updateName(respose.name);
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvatarComponent);
const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 10px;
`;
