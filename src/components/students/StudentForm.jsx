    import { Button, DatePicker, Form, Input, Radio, Select } from "antd";
    import { useDispatch } from "react-redux";
    import { addStudent, updateStudent } from "../../store/features/studentsSlice";
    import { selectStudentById } from "../../store/selectors/studentsSelectors";
    import { useSelector } from "react-redux";
    import dayjs from 'dayjs';

    const { Option } = Select;

    export default function StudentForm({ onSave, studentId }) {
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const currentStudent = useSelector(state => selectStudentById(state, studentId));

    const onFinish = values => {
        const studentData = {
        ...values,
        dateOfBirth: values.dateOfBirth.format('YYYY-MM-DD'),
        socialNetworkLinks: values.socialNetworkLinks?.split(',').map(link => link.trim()) || []
        };
        
        if (studentId) {
        dispatch(updateStudent({ ...studentData, id: studentId }));
        } else {
        dispatch(addStudent({ ...studentData, id: Date.now() }));
        }
        onSave();
    };

    return (
        <Form
        form={form}
        name="student"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{
            ...currentStudent,
            dateOfBirth: currentStudent?.dateOfBirth ? dayjs(currentStudent.dateOfBirth) : null,
            socialNetworkLinks: currentStudent?.socialNetworkLinks?.join(', ') || ''
        }}
        >
        <h3>{studentId ? "Edit Student" : "Create Student"}</h3>
        
        <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please input student's full name!" }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Date of Birth"
            name="dateOfBirth"
            rules={[{ required: true, message: "Please select date of birth!" }]}
        >
            <DatePicker />
        </Form.Item>

        <Form.Item
            label="Gender"
            name="gender"
            rules={[{ required: true, message: "Please select gender!" }]}
        >
            <Radio.Group>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="other">Other</Radio>
            </Radio.Group>
        </Form.Item>

        <Form.Item
            label="City"
            name="city"
            rules={[{ required: true, message: "Please input city!" }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Social Links"
            name="socialNetworkLinks"
            help="Separate multiple links with commas"
        >
            <Input.TextArea rows={2} placeholder="https://facebook.com/user, https://twitter.com/user" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
            Save
            </Button>
        </Form.Item>
        </Form>
    );
    }