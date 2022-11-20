import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import background from './images/background/mobileBackground.jpg'
import { FiMenu } from 'react-icons/fi';
import './styles/index.css'
import RouterConfig from './Router/RouterConfig';

const App = React.memo(()=>{
  const navigate = useNavigate();
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleClickOpenMenu = () => {
    setIsOpenMenu(true)
  }

  const handleClickCloseMenu = () => {
    setIsOpenMenu(false)
  }

  return (
    <div className="background" style={{ backgroundImage: `url(${background})`}}>
      <header>
        <div id="header-itemBox">
          <h1 onClick={() => navigate('/')}>くらべてみなイカ？</h1>
            <FiMenu onClick={handleClickOpenMenu}/>
        </div>
      {isOpenMenu &&
      <>
        <div className='menuContent'>
          <ul>
          <li className='menuClose' onClick={handleClickCloseMenu}>
                X
              </li>
              <li>
                <Link to={'/'} style={{ textDecoration: 'none' }}><p>TOP</p></Link>
              </li>
              <li>
                <Link to={'/weapons'} style={{ textDecoration: 'none' }}><p>ブキ</p></Link>
              </li>
              <li>
                <Link to={'/head'} style={{ textDecoration: 'none' }}><p>アタマ</p></Link>
              </li>
              <li>
                <Link to={'/armor'} style={{ textDecoration: 'none' }}><p>フク</p></Link>
              </li>
              <li>
                <Link to={'/shoes'} style={{ textDecoration: 'none' }}><p>くつ</p></Link>
              </li>
            </ul>
        </div>
      </>}

      </header>

      <div className='center'>
        <RouterConfig />
      </div>

      <footer>
        ここがfooterです
      </footer>
    </div>
  );
})

export default App;
