import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { Camera } from "expo-camera";
import { Container, ButtonsContainer, Button } from "./CameraComponents";
import { Ionicons } from "@expo/vector-icons";

const CameraPage = ({ setPhotos }) => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const isFocused = useIsFocused();
  let camera = Camera;

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhotos((photos) => [photo, ...photos]);
  };

  useEffect(() => {
    (async () => {
      await Camera.requestCameraPermissionsAsync();
    })();
  }, []);

  return (
    <Container>
      {isFocused && (
        <Camera
          type={type}
          style={{ flex: 1 }}
          ref={(r) => {
            camera = r;
          }}
          autoFocus="on"
          flashMode="auto"
        >
          <ButtonsContainer>
            <Button
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Ionicons name="camera-reverse" size={50} color="white" />
            </Button>
            <Button onPress={takePhoto}>
              <Ionicons name="aperture-outline" size={50} color="white" />
            </Button>
          </ButtonsContainer>
        </Camera>
      )}
    </Container>
  );
};

export default CameraPage;
