import { Button, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/features/currentUserSlice";

const { Text } = Typography;

export default function AccountInfo() {
  const user = useSelector(state => state.currentUser);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signOut());
  }

  return (
    <Space>
      <Text style={{ color: 'white' }}>Hi, {user.login}</Text>
      <Button type="primary" danger onClick={logout}>Sign out</Button>
    </Space>
  );
}