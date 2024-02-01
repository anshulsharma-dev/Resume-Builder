import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import CatchingPokemonSharpIcon from "@mui/icons-material/CatchingPokemonSharp";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokemonSharpIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          RESUME BUILDER
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
