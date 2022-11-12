import { useNavigate } from 'react-router-dom'
import '../../styles/listpage/listitems.css'
import '../../styles/menulist.css'

const SelectPlayMode = () => {
  const navigate = useNavigate()
  const handleNavigateTotalling = () =>{
    navigate("/totalling/result")
  }
  return (
    <div>
      <ul className='btnList'>
        <li className='listStyle'>
          <button className='btn' >ブキ1</button>
        </li>
      </ul>
      <h1 className='h1'>どれをプレイした？</h1>
      <ul className='listitemsUlLeft'>
        <li className='listitemsLiLeft' onClick={handleNavigateTotalling}>ナワバリバトル</li>
        <li className='listitemsLiLeft' onClick={handleNavigateTotalling}>ヒーローモード</li>
        <li className='listitemsLiLeft' onClick={handleNavigateTotalling}>サーモンラン</li>
      </ul>
    </div>
  )
}

export default SelectPlayMode
