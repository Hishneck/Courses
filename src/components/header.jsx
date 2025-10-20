import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          Courses
        </Typography>
        <Typography variant="body1">
          <Link
            to="/"
            style={{ textDecoration: "none", color: "white", margin: 20 }}
          >
            Курсы
          </Link>
        </Typography>
        <Typography variant="body1">
          <Link
            to="/createform"
            style={{ textDecoration: "none", color: "white" }}
          >
            Создать новый курс
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
