import React from 'react';
import { AppUI } from './AppUI';
import { ToDoProvider } from '../Context/Context';

function App() {

  return(
    <ToDoProvider>
      <AppUI></AppUI>
    </ToDoProvider>
  )
}

export default App;