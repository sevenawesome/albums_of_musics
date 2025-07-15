import {useNavigate} from 'react-router-dom';
import Icon from '../Icon/Icon';
import { ICON_CONSTANTS } from '../../../features/constants/icon.constants';

export default function GoBackLink(){
   const navigate = useNavigate();
   return <>
        <div onClick={()=>navigate(-1)}>
            <Icon  className='w-6 h-6 text-gray-800 dark:text-white' 
            name={ICON_CONSTANTS.angleLeft} />
        </div>
   </> 
}