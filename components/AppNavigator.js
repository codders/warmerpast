import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ViewProfile from './ViewProfile';
import EditProfile from './EditProfile';
import EditIdDocument from './EditIdDocument';
import EditAddress from './EditAddress';

const Stack = createStackNavigator()

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ViewProfile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="EditIdDocument" component={EditIdDocument} />
      <Stack.Screen name="EditAddress" component={EditAddress} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
