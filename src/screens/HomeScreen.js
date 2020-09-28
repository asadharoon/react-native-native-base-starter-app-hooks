import React, { useEffect, useState } from "react";
import {
  Content,
  Container,
  Button,
  Text,
  Title,
  Item,
  Header,
  Body,
  Spinner,
} from "native-base";
import { View } from "react-native";
import * as Font from "expo-font";
const HomeScreen = () => {
  const [name, setName] = useState("Asad");
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadFont = async () =>
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      });

    loadFont();
    setLoading(false);
  }, []);
  return (
    <React.Fragment>
      {loading && (
        <Container>
          <Content
            contentContainerStyle={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner
              color="blue"
              style={{ justifyContent: "center" }}
            ></Spinner>
          </Content>
        </Container>
      )}
      {!loading && (
        <Container>
          <Header>
            <Body>
              <Title
                style={{
                  marginLeft: 100,
                }}
              >
                React Native App 1
              </Title>
            </Body>
          </Header>
          <Item
            style={{
              marginBottom: 20,
              borderBottomColor: "transparent",
              marginTop: 20,
              justifyContent: "center",
            }}
          >
            <Text>Hello this is my toggle State App #1 </Text>
          </Item>
          <Content
            contentContainerStyle={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Item
              style={{ marginBottom: 20, borderBottomColor: "transparent" }}
            >
              <Text>Hello {name}</Text>
            </Item>
            <Item>
              <Button
                onPress={() => {
                  clicked ? setName("Asad Haroon") : setName("Asad");
                  setClicked(!clicked);
                }}
                primary
                style={{
                  shadowColor: "rgba(0, 0, 0, 0.1)",
                  shadowOpacity: 0.8,
                  elevation: 16,
                  shadowRadius: 15,
                  shadowOffset: { width: 1, height: 13 },
                }}
              >
                <Text>Toggle State</Text>
              </Button>
            </Item>
          </Content>
        </Container>
      )}
    </React.Fragment>
  );
};

export default HomeScreen;
