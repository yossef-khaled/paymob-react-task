//Import from reacoil
import { userData } from '../../Atoms';
import { useRecoilState } from 'recoil'; 

function Home(props) {

    const [user] = useRecoilState(userData);

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <p style={{fontWeight: 'bold'}}>You logged in with user name:</p>
            <br/>
            {user.userName}
            <br/>
            <p style={{fontWeight: 'bold'}}>and password:</p>
            <br/>
            {user.password}
        </div>
    );

}

export default Home;