import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const Label = styled.Text`
  font-size: 25px;
  color: white;
  padding:5px;
`;

const Img = styled.Image`
    width: 150px;
    height: 150px;
    margin:15px;
    border-radius: 75px;
`;

const Button = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  background-color: red;
  width: 200px;
  align-items: center;
`;

export { Container, Label, Img, Button }