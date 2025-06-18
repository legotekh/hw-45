    import { Button, Card, Tag } from "antd";
    import dayjs from 'dayjs';

    export default function StudentCard({ onEdit, onDelete, ...student }) {
    const getGenderColor = () => {
        switch(student.gender) {
        case 'male': return 'blue';
        case 'female': return 'pink';
        default: return 'gray';
        }
    };

    return (
        <Card 
        title={student.fullName} 
        style={{ marginBottom: 16 }}
        extra={<Tag color={getGenderColor()}>{student.gender}</Tag>}
        >
        <p><strong>Date of Birth:</strong> {dayjs(student.dateOfBirth).format('DD/MM/YYYY')}</p>
        <p><strong>City:</strong> {student.city}</p>
        
        {student.socialNetworkLinks && student.socialNetworkLinks.length > 0 && (
            <p>
            <strong>Social Links:</strong>
            {student.socialNetworkLinks.map((link, index) => (
                <Tag key={index} style={{ marginLeft: 8 }}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {link.split('/')[2]}
                </a>
                </Tag>
            ))}
            </p>
        )}
        
        <div style={{ marginTop: 16, textAlign: 'right' }}>
            <Button type="primary" onClick={() => onEdit(student.id)} style={{ marginRight: 8 }}>
            Edit
            </Button>
            <Button danger onClick={() => onDelete(student.id)}>
            Delete
            </Button>
        </div>
        </Card>
    );
    }