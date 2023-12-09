import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export const Register = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.innerCont}>
        <View>
          <Text>Register</Text>
        </View>
        <View>
          <TextInput placeholder='Email' style={{ borderWidth: 1, marginTop: 10, padding: 4, color: "gray" }} />
          <TextInput placeholder='Username' style={{ borderWidth: 1, marginTop: 10, padding: 4, color: "gray" }} />
          <TextInput placeholder='Password' style={{ borderWidth: 1, marginTop: 10, padding: 4, color: "gray" }} />
          <TextInput placeholder='Confrim Password' style={{ borderWidth: 1, marginVertical: 15, padding: 4, color: "gray" }} />
        </View>
        <Button title='Register' onPress={() => navigation.navigate("Home")} />
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
