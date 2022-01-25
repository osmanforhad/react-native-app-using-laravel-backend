import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';



const App = () => {

  return (
    <View style={styles.Container}>
      <Text>osman</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: 300,
    paddingHorizontal: 155,
  }
});

export default App;
