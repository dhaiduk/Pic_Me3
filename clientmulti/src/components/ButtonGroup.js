import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const ButtonGroup = () => {
  const [selection, setSelection] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.ButtonGroup}>
        <TouchableOpacity
          style={[
            styles.btn,
            selection === 1 ? { backgroundColor: 'grey' } : null
          ]}
          onPress={() => setSelection(1)}
        >
          <Text
            style={[
              styles.btnText,
              selection === 1 ? { color: 'white' } : null
            ]}
          >
            Players
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            selection === 2 ? { backgroundColor: 'grey' } : null
          ]}
          onPress={() => setSelection(2)}
        >
          <Text
            style={[
              styles.btnText,
              selection === 2 ? { color: 'white' } : null
            ]}
          >
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btn,
            selection === 3 ? { backgroundColor: 'grey' } : null
          ]}
          onPress={() => setSelection(3)}
        >
          <Text
            style={[
              styles.btnText,
              selection === 3 ? { color: 'white' } : null
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  ButtonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    //borderBottomWidth: 5,
    borderBottomColor: 'grey',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  btn: {
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'grey',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 5,

  },
  btnText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 12,
    padding: 10
    
  }
});

export default ButtonGroup;
