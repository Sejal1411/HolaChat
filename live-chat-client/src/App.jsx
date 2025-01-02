import { Routes, Route } from 'react-router-dom';
import  Login  from './components/Login';
import Main from './components/Main';
import Welcome from './components/Welcome';
import ChatArea from './components/ChatArea';
import CreateGroups from './components/CreateGroups';
import Groups from './components/Groups';


const App = () => {

  return (
  // <Main />
  <Routes>
    <Route path="/" element={<Login />}/>
    <Route path="app" element={<Main />}>
       <Route path="welcome" element={<Welcome />}></Route>
       <Route path="chats" element={<ChatArea />}></Route>
       <Route path="create-groups" element={<CreateGroups />}></Route>
       <Route path="groups" element={<Groups />}></Route>
    </Route>
  </Routes>
  // <Login />
  );  
  }

export default App
