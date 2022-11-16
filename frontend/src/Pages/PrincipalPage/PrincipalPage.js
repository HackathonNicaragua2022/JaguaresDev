import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../images/LOGODACTI.png';
import principalimage from '../../images/principal-image.jpg';
import './PrincipalPage.css';
import { roomActions } from '../../store/store';

const PrincipalPage = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(roomActions.setIsRoomHost(false));
  }, [])

  return (
    <div className='principal_page_nav'>
        <body>
            <header class="header">
            <div>
            <img src={logo} className='logo'></img>
            </div>
            <div>
            <nav class="nav">
                    <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link">Inicio</a></li>
                    <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link">Nosotros</a></li>
                    <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link">Perfil</a></li>
                    <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link">Servicios</a></li>
                    <li class="nav-menu-item"><a href="#" class="nav-menu-link nav-link">Reseñas</a></li>
                </nav>        
            </div>
            <div>
            <button className="nav-menu-link nav-link btn">Conectate</button>
            </div>
            <div>
            <img src={principalimage} className="princ-image"></img>
            </div>
            <div className="texto">
            <h1>Uniendo al mundo sin barreras</h1>
            <p>El servicio de videollamadas más completo e inclusivo. Porque todos, sin excepciones merecemos disfrutar de los beneficios de la tecnología.</p>
            </div>
            <div>
            <button className="nav-menu-link nav-link btn2">Conectate</button>
            </div>

            </header>
        </body>
    </div>
  );
};

export default PrincipalPage;