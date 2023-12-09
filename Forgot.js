import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export const Forgot = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.innerCont}>
        <View>
          <Text>Login</Text>
        </View>
        <View>
          <TextInput placeholder=' Email' style={{ borderWidth: 1, marginVertical: 15, padding: 4, color: "gray" }} />
        </View>
        <Button title='Submit' onPress={() => navigation.navigate("Verify")} />
      </View>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerCont: {
    padding: 15,
    margin: "auto",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2
  }
})
