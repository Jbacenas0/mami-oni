import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Register } from './Screens/Register';
import { Login } from './Screens/Login';
import { Profile } from './Screens/Profile';
import Home from './Screens/Home';
import { Forgot } from './Screens/Forgot';
import { Verify } from './Screens/Verify';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;

