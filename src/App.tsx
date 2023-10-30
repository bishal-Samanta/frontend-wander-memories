
import './App.css'
import { Navbar } from './components/Navbar';
import AllRoutes from './routes/allRoutes';



function App() {

  return (
    <>
      <h1 className="text-center my-3 font-sans">Hello All!</h1>
      <h3 className="text-center py-2">Welcome to - Wander Memory Application! </h3>

      <AllRoutes />
      <Navbar />
    </>
  )
}

export default App
