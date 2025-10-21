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
            className="header_link"
          >
            Курсы
          </Link>
        </Typography>
        <Typography variant="body1">
          <Link
            to="/createform"
            className="header_link"
          >
            Создать новый курс
          </Link>
        </Typography>
        <Typography variant="body1">
          <Link
            to="/createform_module"
            className="header_link"
          >
            Создать новый модуль
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
