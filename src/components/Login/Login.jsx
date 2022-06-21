//Import from react
import { useEffect, useState } from 'react'; 

//Import from recoil
import { useRecoilState } from 'recoil';
import { userData } from '../../Atoms';

//Import helpers
import { validateUserName, validatePassword } from '../../Helpers/Validators';

//Import style
import './Login.css'

function Login(props) {

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [userNameErrMsg, setUserNameErrMsg] = useState('Please enter user name');
    const [passwordErrMsg, setPasswordErrMsg] = useState('Please enter password');
    const [user, setUser] = useRecoilState(userData);

    useEffect(() => {
        validateUserName(userName).status == 0 ? setUserNameErrMsg(validateUserName(userName).errMsg)
        : setUserNameErrMsg('')
    }, [userName]);

    useEffect(() => {
        validatePassword(password).status == 0 ? setPasswordErrMsg(validatePassword(password).errMsg) 
        : setPasswordErrMsg('')
    }, [password])

    const handleUserNameChange = (e) => {
       setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = () => {
        props.handleSubmit(userName, password);
    }

    return (
        <div className='main-container'>
            <div style={{marginTop: '5rem'}}>
                <p style={{display: 'inline', margin: '3rem'}}>User name</p>
                <input
                    onChange={(e) => handleUserNameChange(e)}
                />
            </div>
            <p style={{color: 'red'}}>
                {userNameErrMsg}
            </p>
            <br/>
            <div style={{marginTop: '5rem'}}>
                <p style={{display: 'inline', margin: '3rem'}}>Password</p>
                <input type={'password'}
                    onChange={(e) => handlePasswordChange(e)}
                />
            </div>
            <p style={{color: 'red', width: '20%'}}>
                {passwordErrMsg}
            </p>
            <button 
                className='button'
                disabled={passwordErrMsg || userNameErrMsg ? 'button disabled' : ''}
                onClick={() => handleSubmit()}
            >
                Submit
            </button>
        </div>
    );

}

export default Login;