import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';

export const Login = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.innerCont}>
        <View>
          <Text>Login</Text>
        </View>
        <View>
          <TextInput placeholder='Username' style={{ borderWidth: 1, marginTop: 10, padding: 4, color: "gray" }} />
          <TextInput placeholder=' Password' style={{ borderWidth: 1, marginVertical: 15, padding: 4, color: "gray" }} />
        </View>
        <Button title='Login' onPress={() => navigation.navigate("Profile")} />
        <Pressable onPress={() => navigation.navigate("Forgot")}>
          <Text style={{ textAlign: "right" }}>Forgot Password?</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={{ textAlign: "right" }}>Create an Account</Text>
        </Pressable>
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
