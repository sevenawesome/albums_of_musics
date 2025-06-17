import {config} from 'dotenv';
import { cleanEnv,str,url, } from 'envalid';

config();

const ENV = cleanEnv(process.env,{
    REACT_APP_API_URL: (),
    REACT_APP_ENV: str({choices:['development','staging','production'], default: 'development'}),
});

export default ENV;