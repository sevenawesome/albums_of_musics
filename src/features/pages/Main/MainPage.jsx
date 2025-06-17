import Styles from './MainPage.module.scss';
import Header from '../../../components/common/Header/Header';
export default function MainPage({children}){

    return <>
            <Header>
                <h1 className='class="text-3xl font-bold underline"'>This is the Header</h1>
            </Header>
    </>
}