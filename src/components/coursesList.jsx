import CoursesItem from './CoursesItem';
import { Grid } from '@mui/material';

const CoursesList = (props) => {
    const {courses} = props;

    return (
        <Grid container spacing={2}>
            {courses.map((item) => (
                <CoursesItem key={item.id} {...item} />
            ))}
        </Grid>
    );
};

export default CoursesList;