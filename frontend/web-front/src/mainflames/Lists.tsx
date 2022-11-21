import { useState } from 'react'
import { useLocation } from 'react-router';
import '../styles/listPage/listPageStyle.css';
import '../styles/menulist.css';
import SelectWeapon1 from '../components/ListPageComponents/SelectWeapon1';
import SelectWeapon2 from '../components/ListPageComponents/SelectWeapon2';

const Lists = () => {
  const location = useLocation()
  const [selectWeapon1, setSelectWeapon1] = useState(location.state)

  if(localStorage.getItem('passed') === 'true'){
    localStorage.setItem('passed','false');
  }

  return (
    <div>
      <div id="selectWindow">
        <ul className='btnList'>
          <li className='listStyle'>
            <button className='visualConfirmation' >list111</button>
          </li>
          <li className='listStyle'>
            <button className='visualConfirmation' disabled={false}>list2</button>
          </li>
        </ul>
      </div>
      {!selectWeapon1 ? <SelectWeapon1 /> : <SelectWeapon2 />}
    </div>
  )
}

export default Lists
