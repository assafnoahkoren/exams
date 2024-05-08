
import { useExampleHook } from '@shared/hooks/ExampleHook';
import './App.css'
import { FC } from 'react';
import {ExampleComponent} from "@shared/components/ExampleComponent.tsx";



const App: FC = () => {
  useExampleHook();
  return (
    <div>
      <ExampleComponent />

    </div>
  )
}

export default App
