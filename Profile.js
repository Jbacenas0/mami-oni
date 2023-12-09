import { Button, View, Text, StyleSheet } from 'react-native'

export const Profile = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text style={{ marginVertical: 20 }}>Welcom To Dashboard</Text>
      <Button title='Logout' onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
