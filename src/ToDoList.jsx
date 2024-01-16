import { useMemo } from 'react'
import { Card, Button, Input, Form } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import TaskItem from './TaskItem'
import { addTask, updateTask, deleteTask } from './redux/slicers/task.slice'

function ToDoList() {
  const { taskList } = useSelector((state) => state.task)

  const dispatch = useDispatch()

  const handleAddTask = (values) => {
    dispatch(
      addTask({
        values: values,
      })
    )
  }

  const handleUpdateTask = (id, values) => {
    dispatch(
      updateTask({
        id: id,
        values: values,
      })
    )
  }

  const handleDeleteTask = (id) => {
    dispatch(
      deleteTask({
        id: id,
      })
    )
  }

  const renderTaskList = useMemo(() => {
    return taskList.map((item) => {
      return (
        <TaskItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          handleUpdateTask={handleUpdateTask}
          handleDeleteTask={handleDeleteTask}
        />
      )
    })
  }, [taskList])

  return (
    <div style={{ maxWidth: 500, margin: '16px auto' }}>
      <h1>To Do List</h1>
      <Card size="small" title="Add task">
        <Form name="addTaskForm" layout="vertical" onFinish={(values) => handleAddTask(values)}>
          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                required: true,
                whitespace: true,
                message: 'Please input title',
              },
              {
                min: 3,
                type: 'string',
                message: 'Title must be at least 3 characters',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="content"
            label="Content"
            rules={[
              {
                required: true,
                whitespace: true,
                message: 'Please input content',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Button htmlType="submit" type="primary" block>
            Add task
          </Button>
        </Form>
      </Card>
      {renderTaskList}
    </div>
  )
}

export default ToDoList
