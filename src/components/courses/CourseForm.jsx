import { Button, DatePicker, Form, Input, InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addItem, editItem } from "../../store/features/coursesSlice";
import { selectById } from "../../store/selectors/coursesSelectors";
import dayjs from 'dayjs';

export default function CourseForm({onSave, courseId}) {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const currentCourse = useSelector(state => selectById(state, courseId));

  const handleCourseSave = values => {
    const courseData = {
      ...values,
      startDate: values.startDate.format('YYYY-MM-DD')
    };
    
    if (courseId) {
      dispatch(editItem({...courseData, id: courseId}));
    } else {
      dispatch(addItem({...courseData, id: Date.now()}));
    }
    onSave();
  };

  return (
    <Form
      form={form}
      name="course"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={handleCourseSave}
      autoComplete="off"
      initialValues={{
        ...currentCourse,
        startDate: currentCourse?.startDate ? dayjs(currentCourse.startDate) : null
      }}
    >
      <h3>{courseId ? "Edit Course" : "Create Course"}</h3>
      
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input the course name!" }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        label="Start Date"
        name="startDate"
        rules={[{ required: true, message: "Please select start date!" }]}
      >
        <DatePicker />
      </Form.Item>
      
      <Form.Item
        label="Number of Lessons"
        name="lessonsCount"
        rules={[{ required: true, message: "Please input number of lessons!" }]}
      >
        <InputNumber min={1} max={100} style={{ width: '100%' }} />
      </Form.Item>
      
      <Form.Item
        label="Description"
        name="description"
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}