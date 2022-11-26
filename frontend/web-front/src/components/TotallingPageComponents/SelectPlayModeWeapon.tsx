import { useNavigate } from 'react-router-dom'
import '../../styles/listpage/listitems.css'
import '../../styles/menulist.css'

const SelectPlayModeWeapon = () => {
  const navigate = useNavigate()
  const handleNavigateTotallingNawabari = () =>{
    navigate("/totalling/result", {state: "area"})
  }
  const handleNavigateTotallingHero = () =>{
    navigate("/totalling/result", {state: "asari"})
  }
  const handleNavigateTotallingSamon = () =>{
    navigate("/totalling/result", {state: "yagura"})
  }
  return (
    <div>
      <h1 className='h1'>どれをプレイした？</h1>
      <ul className='listitemsUlLeft'>
        <li className='listitemsLiLeft' onClick={handleNavigateTotallingNawabari}>ナワバリバトル</li>
        <br />
        <li className='listitemsLiLeft' onClick={handleNavigateTotallingHero}>ガチアサリ</li>
        <br />
        <li className='listitemsLiLeft' onClick={handleNavigateTotallingSamon}>ガチヤグラ</li>
      </ul>
    </div>
  )
}

export default SelectPlayModeWeapon
