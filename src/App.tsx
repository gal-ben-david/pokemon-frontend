import { PokemonIndex } from './pages/PokemonIndex'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PokemonProvider } from './context/pokemon.context'

const queryClient = new QueryClient()

function App() {

  return (
    <PokemonProvider>
      <QueryClientProvider client={queryClient}>
        <div className="app-container">
          <main className="main-content main-layout">
            <PokemonIndex />
          </main>
        </div>
      </QueryClientProvider>
    </PokemonProvider>
  )
}

export default App
