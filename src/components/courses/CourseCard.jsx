import { Button, Card, Tag } from "antd";
import dayjs from 'dayjs';

export default function CourseCard({ onEdit, onDelete, ...course }) {
  return (
    <Card 
      title={course.name} 
      style={{ marginBottom: 16 }}
      extra={<Tag color="blue">{course.lessonsCount} lessons</Tag>}
    >
      <p><strong>Start Date:</strong> {dayjs(course.startDate).format('DD/MM/YYYY')}</p>
      {course.description && <p>{course.description}</p>}
      
      <div style={{ marginTop: 16, textAlign: 'right' }}>
        <Button type="primary" onClick={() => onEdit(course.id)} style={{ marginRight: 8 }}>
          Edit
        </Button>
        <Button danger onClick={() => onDelete(course.id)}>
          Delete
        </Button>
      </div>
    </Card>
  );
}