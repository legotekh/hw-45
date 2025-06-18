import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "antd";

import { selectAllStudents } from "../../store/selectors/studentsSelectors";
import StudentsList from "./StudentsList";
import StudentForm from "./StudentForm";
import { addStudent, removeStudent, updateStudent } from "../../store/features/studentsSlice";

export default function StudentsPage() {
  const students = useSelector(selectAllStudents);
  const dispatch = useDispatch();
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editStudentId, setEditStudentId] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
    setEditStudentId(null);
  };

  const handleEdit = studentId => {
    setEditStudentId(studentId);
    setIsModalVisible(true);
  };

  const handleDelete = studentId => {
    Modal.confirm({
      title: 'Delete Student',
      content: 'Are you sure you want to delete this student?',
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => dispatch(removeStudent(studentId))
    });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <h2>Students</h2>
        <Button type="primary" onClick={showModal}>
          Add Student
        </Button>
      </div>
      
      <StudentsList 
        items={students} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
      
      <Modal
        title={editStudentId ? "Edit Student" : "Add Student"}
        open={isModalVisible}
        onCancel={hideModal}
        footer={null}
      >
        <StudentForm 
          studentId={editStudentId} 
          onSave={hideModal} 
        />
      </Modal>
    </div>
  );
}