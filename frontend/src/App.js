import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import { useCheckAuthBack } from './hooks/useCheckAuthBack';
import Dashboard from './components/Dashboard/Dashboard';
import CreateNote from './components/CreateNote/CreateNote';
function App() {
  const status = useCheckAuthBack();
  
  return (
    <div className='App'>
      {
        (status) ?
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/new' element = {<CreateNote/>}/>
          </Routes>
          :
          <Routes>
            <Route path='/' element={<Login />} />
          </Routes>
      }

    </div>

  );
}

export default App;
