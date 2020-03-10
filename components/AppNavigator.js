import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';

const Stack = createStackNavigator()

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ViewProfile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
