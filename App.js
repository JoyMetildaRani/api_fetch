import React from 'react';
import { render } from 'react-dom';
import { View, Text } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      loading: false,
    };
  }

  loadproducts = async () => {
    var url = 'https://dummyjson.com/products';

    await fetch(url)
      .then((response) => response.json())
      .then((responsejson) => {
        this.setState({ product: responsejson.products, loading: true });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(this.state.product[0].title);
  };

  componentDidMount() {
    this.loadproducts();
  }

  render() {
    if (this.state.loading === false) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <View>
          {this.state.product.map((i, index) => {
            return <Text>{this.state.product[index].title}</Text>;
          })}
        </View>
      );
    }
  }
}
