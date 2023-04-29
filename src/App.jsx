import { BrowserRouter } from 'react-router-dom'
import styles from './App.module.css'
import { Header } from './components/Header'
import { AppContextProvider } from './contexts/AppContext'
import { Home } from './pages/Home/Index'
import { Router } from './Router'
import { Tweet } from './Tweet.jsx'

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