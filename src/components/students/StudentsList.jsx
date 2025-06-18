    import StudentCard from "./StudentCard";

    export default function StudentsList({ items, onEdit, onDelete }) {
    return (
        <div>
        {items.map((student) => (
            <StudentCard 
            key={student.id} 
            onEdit={onEdit} 
            onDelete={onDelete} 
            {...student} 
            />
        ))}
        </div>
    );
    }