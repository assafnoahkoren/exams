
import { useExampleHook } from '../../shared/hooks/ExampleHook';
import { ExampleComponent } from '../../shared/components/ExampleComponent';
import './App.css'
import { FC } from 'react';



const App: FC = () => {
  useExampleHook();
  return (
    <div>
      <ExampleComponent />
    </div>
  )
}

export default App
