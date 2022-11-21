import { useNavigate } from 'react-router-dom'
import '../../styles/listPage/listitems.css'
import '../../styles/menulist.css'

const SelectPlayModeWeapon2 = () => {
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
      <ul className='btnList'>
        <li className='listStyle'>
          <button className='btn' >ブキ2</button>
        </li>
      </ul>
      <h1 className='h1'>どれをプレイした？</h1>
      <ul className='listitemsUlRight'>
        <li className='listitemsLiRight' onClick={handleNavigateTotallingNawabari}>ナワバリバトル</li>
        <br />
        <li className='listitemsLiRight' onClick={handleNavigateTotallingHero}>ヒーローモード</li>
        <br />
        <li className='listitemsLiRight' onClick={handleNavigateTotallingSamon}>サーモンラン</li>
      </ul>
    </div>
  )
}

export default SelectPlayModeWeapon2
