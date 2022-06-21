//Import from react
import { useEffect, useState } from 'react'; 

//Import from recoil
import { useRecoilState } from 'recoil'; 
import { userData } from './Atoms';

//Import from react-router-dom
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Import style
import './App.css';

//Import other components
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {

  const [user, setUser] = useRecoilState(userData);
  const [isHomeShown, setIsHomeShown] = useState(false);

  useEffect(() => {
    user.userName && user.password ? setIsHomeShown(true) : setIsHomeShown(false);
  }, [user])

  return (
    <Router>
      {isHomeShown ? 
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        :
        <Routes>
          <Route path='*' element={<Login handleSubmit={(userName, password) => setUser({userName: userName, password: password})}/>}/>
        </Routes>
      }
    </Router>
  );
}

export default App;
