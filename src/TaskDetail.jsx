import { useParams } from 'react-router-dom'

function TaskDetail() {
  const { title, content } = useParams()
  return (
    <div>
      <h3>Title: {title}</h3>
      <h3>Content: {content}</h3>
    </div>
  )
}

export default TaskDetail
