import { useSelector } from "react-redux";
import AccountInfo from "./AccountInfo";
import LoginForm from "./LoginForm";
import { Space, Typography } from "antd";

const { Text } = Typography;

export default function Auth() {
  const user = useSelector(state => state.currentUser);

  return (
    <Space>
      {user.isAuth ? (
        <AccountInfo />
      ) : (
        <>
          <Text type="secondary" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
            Please sign in
          </Text>
          <LoginForm />
        </>
      )}
    </Space>
  );
}