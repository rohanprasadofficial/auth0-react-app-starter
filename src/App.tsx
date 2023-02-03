import './App.css';
import { Navbar } from './components/navbar';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useState } from 'react';
import { Footer } from './components/footer';
import { Dashboard } from './components/dashboard';

function App() {

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
    <Navbar/>
     
      {/* <HeroText/> */}
      <Dashboard  postedAt='Founder at Recipe App' body={'Hellllo, you\'re logged in <br/> Welcome to the Recipe App. Explore different recipes.'} author={{
            name: 'Rohan Prasad',
            image: 'https://media-exp1.licdn.com/dms/image/D5616AQEk-SiPdqh6Bw/profile-displaybackgroundimage-shrink_350_1400/0/1665989036761?e=1674691200&v=beta&t=wmM4eiijZhh89j3DEv8toSHEFAwyQlkpv-UFn6WJukU'
          }} />
      <Footer/>
    </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
