import { Routes, Route } from 'react-router-dom'

import ToDoList from 'ToDoList'
import TaskDetail from 'TaskDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ToDoList />} />
      <Route path="/detail/:title/:content" element={<TaskDetail />} />
    </Routes>
  )
}

export default App
