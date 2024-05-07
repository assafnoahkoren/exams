import './App.css'
import { useExampleHook } from 'shared/hooks/ExampleHook'
import { ExampleComponent } from "shared/components/ExampleComponent.tsx";

function App() {

  useExampleHook()
  return (
    <>
      <ExampleComponent />
    </>
  )
}

export default App
