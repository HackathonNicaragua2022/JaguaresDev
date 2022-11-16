import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import MicButton from "./MicButton";
import lenguaButton from "./lenguaButton";
import SwitchToScreenShareButton from "./SwitchToScreenShareButton";
import fondovideo from '../../../images/fondovideo.png';
import logomesa from '../../../images/logo_mesatrabajo.png';
import barra from '../../../images/Barra.png';
import '../RoomPage.css';

const VideoButtons = () => {
    return (
        <div>
            <div>
            <img className="logo_mesa" src={logomesa}></img> 
            </div>
           
            <div>
            <img className="marco" src={fondovideo}></img> 
            </div>

            <div>
            <img className="barra" src={barra}></img> 
            </div>

            <div className="video_buttons_container">
                <CameraButton />
                <LeaveRoomButton />
                <MicButton />
            </div >

        </div>
    );
}

export default VideoButtons;