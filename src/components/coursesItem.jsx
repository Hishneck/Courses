import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";


const CoursesItem = (props) => {
    const { title, description, imageUrl, category} = props;

    return (
        <Grid size ={4}>
            <Card
                sx={{
                    height: '100%'
                }}
            >
                <CardMedia
                    image={imageUrl}
                    component='img'
                    alt={title}
                    title={title}
                    sx={{height: 140}}
                />
                <CardContent>
                    <Typography variant='h6' component='h3'>{title}</Typography>
                    <Typography variant='body1'>{description}</Typography>
                    <Typography variant='body1'>{category}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CoursesItem;