import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { roomActions } from '../../store/store';
import logo from '../../images/LOGODACTI.png';
import ConnectingButtons from './ConnectingButtons';
import './IntroductionPage.css';
import fondo from '../../images/fondo-mesatrabajo.png';

const IntroductionPage = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(roomActions.setIsRoomHost(false));
  }, [])

  return (
    <div>
        <img src={fondo} className="fondo"></img>
        
        <div className='introduction_page_container'>
        <div className='introduction_page_panel'>
          <img src={logo} className='introduction_page_image'></img>
          <ConnectingButtons />
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;