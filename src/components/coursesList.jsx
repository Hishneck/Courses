import coursesItem from './coursesItem';
import { Grid } from '@mui/material';

const coursesList = (props) => {
    const {courses} = props;

    return (
        <Grid container spacing={2}>
            {courses.map((item) => (
                <coursesItem key={item.id} {...item} />
            ))}
        </Grid>
    );
};

export default coursesList;