import { PokemonIndex } from './pages/PokemonIndex'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <main className="main-content main-layout">
          <PokemonIndex />
        </main>
      </div>
    </QueryClientProvider>
  )
}

export default App
