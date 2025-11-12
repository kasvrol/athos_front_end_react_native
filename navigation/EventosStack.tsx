import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CriarEventoScreen from '@/app/(tabs)/eventos';
import ListarEventosScreen from '@/app/(tabs)/eventos';

const Stack = createNativeStackNavigator();

export default function EventosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="evento" component={ListarEventosScreen} />
      <Stack.Screen name="criarEvento" component={CriarEventoScreen} />
    </Stack.Navigator>
  );
}
