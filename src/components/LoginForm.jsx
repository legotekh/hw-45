import { useDispatch } from "react-redux";
import { signIn } from "../store/features/currentUserSlice";
import { Button, Form, Input } from "antd";

import './LoginForm.scss';

export default function LoginForm() {
  const dispatch = useDispatch();

  const signIntoSite = values => {
    dispatch(signIn({ login: values.username }));
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={signIntoSite}
      autoComplete="off"
      className="login-form"
    >
      <h3>Login Form</h3>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button 
          type="primary" 
          htmlType="submit"
          ghost
          style={{ 
            backgroundColor: 'transparent',
            borderColor: '#1890ff',
            color: '#1890ff'
          }}
        >
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
}