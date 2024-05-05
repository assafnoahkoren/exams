import './App.css'
import { ExampleComponent } from 'shared/components/ExampleComponent'
import { useExampleHook } from 'shared/hooks/ExampleHook'

function App() {

  useExampleHook()
  return (
    <>
      <ExampleComponent />
    </>
  )
}

export default App
