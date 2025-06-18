import { useSelector } from "react-redux";
import { Layout, Menu } from "antd";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { UserOutlined, BookOutlined, TeamOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

import "./App.scss";
import Auth from "./components/Auth";
import CoursesPage from "./components/courses/CoursesPage";
import StudentsPage from "./components/students/StudentsPage";

function App() {
  const user = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    {
      key: "courses",
      icon: <BookOutlined />,
      label: "Courses",
    },
    {
      key: "students",
      icon: <TeamOutlined />,
      label: "Students",
    },
  ];

  const handleMenuClick = ({ key }) => {
    navigate(`/${key}`);
  };

  // Set default selected key based on current path
  const getSelectedKey = () => {
    const path = location.pathname;
    if (path.includes('/courses')) return ['courses'];
    if (path.includes('/students')) return ['students'];
    return [];
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header" style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ color: 'white', fontSize: '1.5rem', marginRight: '24px' }}>
          Academy Manager
        </div>
        <div style={{ flex: 1 }} />
        <Auth />
      </Header>
      
      <Layout>
        {user.isAuth && (
          <Sider width={200} theme="light">
            <Menu
              mode="inline"
              selectedKeys={getSelectedKey()}
              onClick={handleMenuClick}
              items={items}
              style={{ height: '100%', borderRight: 0 }}
            />
          </Sider>
        )}
        
        <Content style={{ padding: '24px' }}>
          {!user.isAuth && (
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <h2>Welcome to Academy Manager</h2>
              <p>Please sign in to access the system</p>
            </div>
          )}
          
          {user.isAuth && (
            <Routes>
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/students" element={<StudentsPage />} />
              <Route path="*" element={<div style={{ textAlign: 'center', padding: '40px' }}>
                <h2>Welcome, {user.login}!</h2>
                <p>Select a section from the menu to get started</p>
              </div>} />
            </Routes>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;