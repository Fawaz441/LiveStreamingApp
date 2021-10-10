
import React,{useEffect} from 'react';
import Onboarding from './screens/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from  "react-native-splash-screen";




const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer>
    <Onboarding/>
    </NavigationContainer>
  );
};



export default App;
