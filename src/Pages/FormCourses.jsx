import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Input,
  TextField,
} from "@mui/material";
import { Form, useForm } from "react-hook-form";
import { useAddProductMutation } from "../redux";
import { useState } from "react";

const FormCourses = () => {
  const [newTitle, setTitle] = useState("");
  const [newDesc, setDesc] = useState("");
  const [newCath, setCath] = useState("");
  const [addProduct, { isError, isLoading }] = useAddProductMutation();

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleAddProduct = async () => {
    if ((newTitle, newDesc, newCath))
      await addProduct({
        title: newTitle,
        description: newDesc,
        imageUrl: "https://picsum.photos/300/202",
        category: newCath,
      }).unwrap();
    setTitle("");
  };

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
        title: data.title,
        description: data.description,
        imageUrl: `https://picsum.photos/300/20${Math.floor(Math.random() * 10)}`,
        category: data.category,
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
        <TextField
          id="standard-basic"
          label="Категория:"
          variant="standard"
          type="text"
          {...register("category", {
            required: "Это поле обязательно",
            minLength: {
              value: 3,
              message: "Минимальная длина 3 символа",
            },
          })}
          error={!!errors.category}
          helperText={errors.category?.message}
        />
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

export default FormCourses;
