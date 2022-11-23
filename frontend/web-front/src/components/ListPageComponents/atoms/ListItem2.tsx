import { useNavigate } from 'react-router-dom';
import weapon1Image from "../../../images/btnImages/weapon/shooter/gal52.png";
import weapon2Image from "../../../images/btnImages/weapon/reelgun/bottle.png";
import '../../../styles/listpage/weaponlist.css'

const ListItem2 = () => {
  const navigate = useNavigate()
  const handleNavigateList1 = () => {
      navigate('/weapons')
  }
  const handleNavigateList2 = () => {
      navigate('/weapons', {state: true})
  }
  return (
    <>
      <ul className='btnList'>
        <li style={{ listStyle: "none" }}><button className='btnDisabled' onClick={handleNavigateList1}><img src={weapon1Image} alt='' /><span>list1</span></button></li>
        <li style={{ listStyle: "none" }}><button className='btn' onClick={handleNavigateList2}><img src={weapon2Image} alt='' /><span>list2</span></button></li>
      </ul>
    </>
  )
}

export default ListItem2
