import { useNavigate } from 'react-router-dom'
import '../../styles/listPage/listitems.css'
import '../../styles/menulist.css'

const SelectPlayModeWeapon = () => {
  const navigate = useNavigate()
  const handleNavigateTotallingNawabari = () =>{
    navigate("/totalling/result", {state: 'ナワバリバトル'})
  }
  const handleNavigateTotallingHero = () =>{
    navigate("/totalling/result", {state: 'ヒーローモード'})
  }
  const handleNavigateTotallingSamon = () =>{
    navigate("/totalling/result", {state: 'サーモンラン'})
  }
  return (
    <div>
      <h1 className='h1'>どれをプレイした？</h1>
      <ul className='listitemsUlLeft'>
        <li className='listitemsLiLeft' onClick={handleNavigateTotallingNawabari}>ナワバリバトル</li>
        <br />
        <li className='listitemsLiLeft' onClick={handleNavigateTotallingHero}>ヒーローモード</li>
        <br />
        <li className='listitemsLiLeft' onClick={handleNavigateTotallingSamon}>サーモンラン</li>
      </ul>
    </div>
  )
}

export default SelectPlayModeWeapon
