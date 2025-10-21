import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useAddModulesMutation, useGetCoursesQuery } from "../redux";
import { useForm } from "react-hook-form";
import { Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const FormModules = () => {
  const [addProduct, { isError, isLoading }] = useAddModulesMutation();
  const [newTitle, setTitle] = useState("");
  const [newDesc, setDesc] = useState("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const [selectedCourseId, setSelectedCourseId] = useState("");

  const {
    data: courses = [],
    isLoading: isCoursesLoading,
    isError: isCoursesError,
    error: coursesError,
  } = useGetCoursesQuery();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    try {
      // Отправляем данные через мутацию
      await addProduct({
        courseId: selectedCourseId,
        title: data.title,
        description: data.description,
      }).unwrap();

      // Сброс формы после успешной отправки
      reset();
      setAlertSeverity("success");
      setAlertMessage("Продукт успешно добавлен!");
      setAlertOpen(true);
      setTimeout(() => {
        setAlertOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      setAlertSeverity("error");
      setAlertMessage(
        "Не удалось добавить продукт. Проверьте данные и соединение."
      );
      setAlertOpen(true);
      setTimeout(() => {
        setAlertOpen(false);
      }, 3000);
    }
  };
  return (
    <Container
      sx={{
        display: "flex",
        mt: "2rem",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        sx={{
          width: 700,
          display: "flex",
          flexDirection: "column",
          margin: 3,
          gap: 2,
          alignItems: "center",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Alert
          severity={alertSeverity}
          sx={{
            visibility: alertOpen ? "visible" : "hidden",
            position: "fixed",
            bottom: "16px",
            left: "16px",
          }}
          onClose={() => setAlertOpen(false)}
        >
          {alertMessage}
        </Alert>
        <TextField
          id="standard-basic"
          label="Название:"
          variant="standard"
          type="text"
          {...register("title", {
            required: "Это поле обязательно",
            minLength: {
              value: 3,
              message: "Минимальная длина 3 символа",
            },
          })}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
        <TextField
          id="standard-basic"
          label="Описание:"
          variant="standard"
          type="text"
          {...register("description", {
            required: "Это поле обязательно",
            minLength: {
              value: 3,
              message: "Минимальная длина 3 символа",
            },
          })}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">Выберите курс</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCourseId}
            onChange={(e) => setSelectedCourseId(e.target.value)}
            displayEmpty
            label="Выберите курс"
            disabled={isCoursesLoading}
          >
            <MenuItem value="" disabled>
              {isCoursesLoading ? "Загрузка..." : "Выберите курс"}
            </MenuItem>
            {courses.map((course) => (
              <MenuItem key={course.id} value={course.id}>
                {course.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {isCoursesError && (
          <Typography color="error" sx={{ mt: 1 }}>
            Ошибка загрузки курсов:{" "}
            {coursesError?.message || "Неизвестная ошибка"}
          </Typography>
        )}
        <Button type="submit" disabled={!isValid || isLoading}>
          {isLoading ? "Отправляется..." : "Отправить"}
        </Button>
        {isError && (
          <Typography color="error">Ошибка при отправке данных</Typography>
        )}
      </Box>
    </Container>
  );
};

export default FormModules;
