// IMPORT SCREENS
import Main from './components/Main';
import Chat from './components/Chat';

// IMPORT REACT NAV
import { createStackNavigator, createAppContainer } from 'react-navigation';

// INITIALIZE NAVIGATOR 
const navigator = createStackNavigator({
  Main: { 
    screen: Main 
  },
  Chat: {
    screen: Chat
  }
});

// CREATE APP CONTAINER WITH ROOT STACK
const App = createAppContainer(navigator);
// Export it as the root component
export default App