import './App.css'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Registration from './pages/Registration';
import Login from './pages/Login';
import AllProjects from './pages/AllProjects';
import ProjectCreate from './pages/ProjectCreate';
import AdminProtected from './component/layout/AdminProtected';
import MemberCreate from './pages/MemberCreate';
import AllMember from './pages/AllMember';
import UpdateMember from './pages/UpdateMember';
import UpdateProjects from './pages/UpdateProjects';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/AllProjects' element={<AllProjects/>} />
          <Route path='/updateProject/:projectId' element={<UpdateProjects />} />
          <Route path='/createProject' element={<AdminProtected><ProjectCreate /></AdminProtected>} />
          <Route path='/createMember' element={<MemberCreate />} />
          <Route path='/allMember' element={<AllMember />} />
          <Route path='/UpdateMember:/memberId' element={<UpdateMember />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App