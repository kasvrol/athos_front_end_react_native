import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import EventosStack from './EventosStack';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  return (
    <Tab.Navigator
    >
      <Tab.Screen
        name="Eventos"
        component={EventosStack}
        options={{
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="Campeonatos"
        component={CampeonatosStack} // <-- A Stack de Campeonatos
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TamaguiIcon name="trophy" color={color} />,
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TamaguiIcon name="menu" color={color} />,
        }}
      />
      <Tab.Screen
        name="Recomendações"
        component={RecomendacoesStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TamaguiIcon name="star" color={color} />,
        }}
      /> */}
    </Tab.Navigator>
  );
}