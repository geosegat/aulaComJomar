import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen56 from './src/screens/Screen56';
import Screen58 from './src/screens/Screen58';
import Screen57 from './src/screens/Screen57';
import Screen60 from './src/screens/Screen60';
import Screen61 from './src/screens/Screen61';
import Screen67 from './src/screens/Screen67';
import Screen68 from './src/screens/Screen68';
import Screen80 from './src/screens/Screen80';
import Screen81 from './src/screens/Screen81';
import AulaComJomar from './src/screens/AulaComJomar';
import Screen64 from './src/screens/Screen64';
import Screen65 from './src/screens/Screem65';

const Stack = createNativeStackNavigator();

const pressButon = () => {
  console.log('Botão pressionado!');
};

const App = () => {
  return (
    <AulaComJomar />
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="AulaComJomar">
    //     <Stack.Screen
    //       name="AulaComJomar"
    //       component={AulaComJomar}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Screen56"
    //       component={Screen56}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Screen58"
    //       component={Screen58}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Screen57"
    //       component={Screen57}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Screen60"
    //       component={Screen60}ty-
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Screen61"
    //       component={Screen61}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Screen67"
    //       component={Screen67}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Screen68"
    //       component={Screen68}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Screen80"
    //       component={Screen80}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Screen81"
    //       component={Screen81}
    //       options={{headerShown: false}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
