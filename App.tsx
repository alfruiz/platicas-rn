import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.handleCounter = this.handleCounter.bind(this);
  }

  handleCounter = () => {
    const { counter } = this.props;

    counter++;

    this.setState({
      counter
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
