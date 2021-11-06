import React from "react";
import { View } from "react-native";
import { Container, GalleryCont, Img, Label } from "./GalleryComponents";

const GalleryPage = ({ photos }) => {
  return (
    <Container>
      {photos.length > 0 ? (
        <GalleryCont
          data={photos}
          numColumns={2}
          keyExtractor={(item) => item.uri}
          renderItem={({ item }) => {
            return (
              <View>
                <Img source={{ uri: item.uri }} />
              </View>
            );
          }}
        />
      ) : (
        <Label>No photos found :(</Label>
      )}
    </Container>
  );
};

export default GalleryPage;
