    import { studentsAdapter } from "../features/studentsSlice";

    export const { 
    selectAll: selectAllStudents, 
    selectById: selectStudentById 
    } = studentsAdapter.getSelectors(state => state.students);