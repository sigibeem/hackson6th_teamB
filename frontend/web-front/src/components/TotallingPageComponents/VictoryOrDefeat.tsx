import { Link } from 'react-router-dom'
import '../../styles/listpage/listitems.css'
import '../../styles/menulist.css'

const VictoryOrDefeat = () => {
  return (
    <div>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <ul className='listitemsUlLeft'>
          <li className='listitemsLiLeft'>勝ち</li>
          <li className='listitemsLiLeft'>負け</li>
        </ul>
      </Link>
    </div>
  )
}

export default VictoryOrDefeat
