import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import EditProfile from './EditProfile';

const Stack = createStackNavigator()

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
