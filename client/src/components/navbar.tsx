import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import SchoolIcon from '@mui/icons-material/School'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            disableRipple
          >
            <SchoolIcon />
          </IconButton>
          <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button color="inherit">
            <Typography variant="button">Login</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
