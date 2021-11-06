import React from "react";
import { Container, Label, Img, Button } from "./ProfileComponents";
import Toast from "react-native-root-toast";

const ProfilePage = ({ setPhotos }) => {
  const handleDelete = () => {
    setPhotos([]);
    Toast.show("Photos were successfully deleted!", {
      duration: Toast.durations.SHORT,
      position: Toast.positions.TOP,
      containerStyle: { marginTop: 100 },
      backgroundColor: "green",
    });
  };

  return (
    <Container>
      <Img source={require("../../assets/tilin.png")} />
      <Label>Natanael Acero</Label>
      <Label>IDGS 10A</Label>
      <Label>11/05/2021</Label>
      <Button onPress={handleDelete}>
        <Label>Delete photos</Label>
      </Button>
    </Container>
  );
};

export default ProfilePage;
