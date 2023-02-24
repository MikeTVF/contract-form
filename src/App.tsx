import Routes from './routes'
import {ContractFormStateProvider} from 'context/ContractFormContext'

function App() {
  return (
    <main className="mx-auto max-w-5xl px-8 py-4">
      <ContractFormStateProvider>
      <Routes />
      </ContractFormStateProvider>
    </main>
  )
}

export default App
