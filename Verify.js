import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export const Verify = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={style.innerCont}>
        <View>
          <Text>Login</Text>
        </View>
        <View>
          <TextInput placeholder='New Password' style={{ borderWidth: 1, marginTop: 10, padding: 4, color: "gray" }} />
          <TextInput placeholder='Confirm Password' style={{ borderWidth: 1, marginTop: 10, padding: 4, color: "gray" }} />
          <TextInput placeholder='Verification Code' style={{ borderWidth: 1, marginVertical: 15, padding: 4, color: "gray" }} />
        </View>
        <Button title='Submit' onPress={() => navigation.navigate("Profile")} />
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
