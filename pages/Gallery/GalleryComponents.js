import styled from "styled-components";

const Container = styled.SafeAreaView`
    flex: 1;
    background-color : black;
    align-items: center;
    justify-content: center;
`;

const GalleryCont = styled.FlatList`
    flex: 1;
`;

const Img = styled.Image`
    width: 150px;
    height: 300px;
    margin:15px;
    border-radius: 15px;
`;

const Label = styled.Text`
  font-size: 25px;
  color: white;
  padding:5px;
`;

export { Container, GalleryCont, Img, Label }