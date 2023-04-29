import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './contexts/AppContext'
import { Router } from './Router'

export default function App() {
/*   return (
    <div>
      <Header />
      <Home />
    </div>
  ) */ 

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContextProvider>
  )
}