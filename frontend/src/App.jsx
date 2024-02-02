import './App.css'
import AddWorkout from './Component/AddWorkout/AddWorkout'
import Navbar from './Component/Navbar/Navbar'
import Workout from './Component/Workout/Workout'

function App() {


  return (
    <div className="">

      <Navbar />
      <div className=" content">

        <Workout />
        <AddWorkout />
      </div>

    </div>

  )
}

export default App
