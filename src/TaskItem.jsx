import { useState } from 'react'
import { Card, Button, Input, Form, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function TaskItem({ id, title, content, handleUpdateTask, handleDeleteTask }) {
  const [isUpdate, setIsUpdate] = useState(false)

  const navigate = useNavigate()

  if (isUpdate) {
    return (
      <Card title="Update" size="small" style={{ marginTop: 8 }}>
        <Form
          name={`updateTaskForm-${id}`}
          layout="vertical"
          initialValues={{
            title: title,
            content: content,
          }}
          onFinish={(values) => {
            handleUpdateTask(id, values)
            setIsUpdate(false)
          }}
        >
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
          <Space style={{ marginTop: 8 }}>
            <Button htmlType="submit" type="primary">
              Save
            </Button>
            <Button onClick={() => setIsUpdate(false)}>Cancel</Button>
            <Button danger onClick={() => handleDeleteTask(id)}>
              Delete
            </Button>
          </Space>
        </Form>
      </Card>
    )
  }
  return (
    <Card title={title} size="small" style={{ marginTop: 8 }}>
      {content}
      <Space style={{ marginTop: 8 }}>
        <Button onClick={() => navigate(`/detail/${title}/${content}`)}>Detail</Button>
        <Button type="primary" ghost onClick={() => setIsUpdate(true)}>
          Update
        </Button>
        <Button danger onClick={() => handleDeleteTask(id)}>
          Delete
        </Button>
      </Space>
    </Card>
  )
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  handleUpdateTask: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
}

TaskItem.defaultProps = {
  title: '',
  content: '',
  handleUpdateTask: () => {},
  handleDeleteTask: () => {},
}

export default TaskItem
