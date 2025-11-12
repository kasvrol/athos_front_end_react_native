import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '@/app/login';
import Signup from '@/app/singup';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}