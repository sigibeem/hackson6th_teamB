import { useState } from "react"
import { useLocation } from "react-router"
import SelectPlayModeWeapon1 from "../components/TotallingPageComponents/SelectPlayModeWeapon1"
import SelectWeaponVote from "../components/TotallingPageComponents/SelectWeaponVote"



const Totalling = () => {
  const location = useLocation()
  const [selectWeapon, setSelectWeapon] = useState(location.state)
  const handleClickShowPlayMode = () => {
    setSelectWeapon(true)
  }
  return (
    <div>
      {!selectWeapon ? 
      <>
      <SelectWeaponVote />
      <button onClick={handleClickShowPlayMode}>プレイモード選択へ</button>
      </>
      :
      <SelectPlayModeWeapon1 />
    }
    </div>
  )
}

export default Totalling
