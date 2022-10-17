import './App.css';
import RegistrationForm from './components/RegistrationForm';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <RegistrationForm />
      </div>
    </ChakraProvider>
    
  );
}

export default App;
