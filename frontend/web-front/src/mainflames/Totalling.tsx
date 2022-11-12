import { useState } from "react"
import { useLocation } from "react-router-dom"
import SelectPlayModeWeapon1 from "../components/TotallingPageComponents/SelectPlayModeWeapon1"
import SelectPlayModeWeapon2 from "../components/TotallingPageComponents/SelectPlayModeWeapon2"


const Totalling = () => {
  const location = useLocation()
  const [selectPlayModeWeapon2] = useState(location.state)
  return (
    <div>
      {!selectPlayModeWeapon2 ? 
      <SelectPlayModeWeapon1 />
      :
      <SelectPlayModeWeapon2 />
      }
      
    </div>
  )
}

export default Totalling
