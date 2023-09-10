import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styled } from 'nativewind';
import { useFonts } from 'expo-font';

const StyledView = styled(View)
const StyledText = styled(Text)

export default function App() {
  const [isFontsLoaded] = useFonts({
    'Bolt': require('./src/assets/fonts/BoltRounded.otf'),
    'FinkHeavy': require('./src/assets/fonts/FinkHeavy.otf'),
    'Monsieur': require('./src/assets/fonts/Monsieur.otf'),
  });

  if(!isFontsLoaded) return;

  return (
    <StyledView className="flex-1 items-center justify-center bg-white ">
      <StyledText className='text-sm font-monsieur'>Open up App.tsx to start working on your app!</StyledText>
      <StatusBar style="auto" />
    </StyledView>
  );
}