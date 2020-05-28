import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from '../redux';

import Home from '../screens/home';
import CreateExpense from '../screens/add-expense';

const Nav = createStackNavigator();

function AppContainer() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Nav.Navigator>
            <Nav.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Nav.Screen name="CreateExpense" component={CreateExpense} options={{title: 'Create Expense'}}/>
          </Nav.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default AppContainer;
