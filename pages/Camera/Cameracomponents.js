import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
`;

const ButtonsContainer = styled.View`
    flex: 1;
    background-color: transparent;
    flex-direction: row;
    margin: 20px
`;

const Button = styled.TouchableOpacity`
    flex: 1;
    align-self: flex-end;
    align-items: center;
`;


export { Container, ButtonsContainer, Button }