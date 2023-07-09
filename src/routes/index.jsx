import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {COLORS} from '../theme';
import BookPreview from '../screens/BookPreview';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: COLORS.primaryBackground},
        }}>
        <Stack.Screen
          name={'home'}
          component={Home}
          options={{
            headerShown: false,
            // presentation: 'modal',
            // animation: item?.animation,
          }}
          //   key={index}
        />
        <Stack.Screen
          name={'BookPreview'}
          component={BookPreview}
          options={{
            headerShown: false,
            // presentation: 'modal',
            // animation: item?.animation,
          }}
          //   key={index}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
