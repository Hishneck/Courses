import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useGetCoursesQuery } from "../redux";
import { useState } from "react";
import imgPH from "../image/imgPlaceholder.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [count, setCount] = useState("");
  const { data = [], isLoading } = useGetCoursesQuery(count);

  return (
    <Container
      sx={{
        mt: "2rem",
      }}
    >
      <Grid
        size={10}
        container
        spacing={2}
        display={"flex"}
        justifyContent={"center"}
      >
        {data.map((item) => (
          <Link to={`/modules/${item.id}`} style={{ textDecoration: "none" }}>
            <Card
              key={item.id}
              sx={{
                height: 450,
                width: 250,
                padding: 2,
                "&:hover": {
                  backgroundColor: "#f5f5f5", // Изменение фона
                  boxShadow: 6, // Усиление тени
                  transform: "scale(1.02)", // Лёгкое увеличение
                  transition: "all 0.3s ease", // Плавный переход
                },
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" height={100} >
                  {item.title}
                </Typography>
                <Typography variant="body1" height={100} overflow={"hidden"} textOverflow={'ellipsis'}>
                  {item.description}
                </Typography>
              </CardContent>
              <CardMedia
                image={item.imageUrl}
                component="img"
                alt={item.title}
                title={item.title}
                sx={{ height: 140 }}
                onError={(e) => {
                  e.target.src = imgPH; // путь к заглушке
                  e.target.alt = "Изображение не загрузилось"; // альтернативный текст для заглушки
                }}
              />
              <CardContent>
                <Typography variant="body1" fontSize={12}>
                  Категория: {item.category}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Grid>
    </Container>
  );
};

export { Homepage };
