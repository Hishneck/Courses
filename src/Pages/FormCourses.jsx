import {
  Box,
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
  const [addProduct, { isError }] = useAddProductMutation();
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

  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
    // setError(!e.target.validity.valid);
    const value = e.target.value;
    if (value.length < 3) {
      setError("Минимальная длина 3 символа");
    } else {
      setError("");
    }
  };
  const isFormValid = error === "";
  return (
    <Container
      sx={{
        display: "flex",
        mt: "2rem",
        justifyContent: "center",
      }}
    >
      <Box component="form" sx={{ width: 700 }} noValidate>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: 3,
            gap: 2,
            alignItems: "center",
          }}
        >
          <TextField
            id="standard-basic"
            label="Название:"
            variant="standard"
            type="text"
            value={newTitle}
            onChange={(e) => {
              setTitle(e.target.value);
              handleChange(e);
            }}
            required
            error={error}
            helperText={error ? "Это поле обязательно" : ""}
            onBlur={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Описание:"
            variant="standard"
            type="text"
            value={newDesc}
            onChange={(e) => {
              setDesc(e.target.value);
              handleChange(e);
            }}
            required
            error={error}
            helperText={error ? "Это поле обязательно" : ""}
            onBlur={handleChange}
          />
          <TextField
            id="standard-basic"
            label="Категория:"
            variant="standard"
            type="text"
            value={newCath}
            onChange={(e) => {
              setCath(e.target.value);
              handleChange(e);
            }}
            required
            error={error}
            helperText={error ? "Это поле обязательно" : ""}
            onBlur={handleChange}
          />
          <Input
            type="submit"
            sx={{ width: 100 }}
            onClick={handleAddProduct}
            disabled={!isFormValid}
          />
        </CardContent>
      </Box>
    </Container>
  );
};

export default FormCourses;
