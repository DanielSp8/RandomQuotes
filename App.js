import { StatusBar } from "expo-status-bar";
import { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.goprogram.ai/inspiration",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      quoteAuthor: "",
      test: "",
    };

    this.quoteTesting = this.quoteTesting.bind(this);
  }

  quoteTesting = async () => {
    axios
      .request(options)
      .then(
        function (response) {
          this.setState({
            quote: response.data.quote,
            quoteAuthor: response.data.author,
          });
        }.bind(this)
      )
      .catch(function (error) {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.quoteText}>{this.state.quote}</Text>
        <Text style={styles.authorText}>{this.state.quoteAuthor}</Text>

        <Button
          onPress={this.quoteTesting}
          title="Daily Inspirational Quote"
          color="#841584"
          accessibilityLabel="Get an inspirational quote."
        />

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkslateblue",
    alignItems: "center",
    justifyContent: "center",
  },
  quoteText: {
    textAlign: "center",
    color: "floralwhite",
    fontSize: 16,
  },
  authorText: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
  },
});

export default App;
