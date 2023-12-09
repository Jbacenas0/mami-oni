import React from 'react'
import { View, Button, StyleSheet, Pressable, Text } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={{ padding: 20 }}>
        <Pressable onPress={() => navigation.navigate("Login")} style={{ marginVertical: 20, backgroundColor: "#3af0f0", flex: 1, paddingHorizontal: 80, paddingVertical: 20 }}>
          <Text>Login</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Register")} style={{ marginVertical: 20, backgroundColor: "#3af0f0", flex: 1, paddingHorizontal: 80, paddingVertical: 20 }}>
          <Text>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Home

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "gray",
    alignItems: "center"
  },
})

