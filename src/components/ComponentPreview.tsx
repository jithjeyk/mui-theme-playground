import {
    Button,
    TextField,
    Card,
    CardContent,
    CardHeader, // Added
    Typography,
    Switch,
    AppBar,
    Toolbar,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon, // Added
    IconButton, // Added
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, // Added
    LinearProgress, // Added
    Chip, // Added
    Paper, // Added
    Avatar, // Added
  } from '@mui/material';
  import { Inbox as InboxIcon } from '@mui/icons-material'; // Added for ListItemIcon
  
  export const ComponentPreview = () => {
    return (
      <div style={{ padding: '20px' }}>
        <Typography variant="h5">Component Preview</Typography>
  
        {/* AppBar */}
        <AppBar position="static" sx={{ mb: 2 }}>
          <Toolbar>
            <Typography variant="h6">AppBar</Typography>
          </Toolbar>
        </AppBar>
  
        {/* Buttons */}
        <Button variant="contained" sx={{ m: 1 }}>Contained Button</Button>
        <Button variant="outlined" sx={{ m: 1 }}>Outlined Button</Button>
        <Button variant="filter" sx={{ m: 1 }}>Filter Button</Button>
  
        {/* IconButton */}
        <IconButton color="primary" sx={{ m: 1 }}>
          <InboxIcon />
        </IconButton>
  
        {/* TextField */}
        <TextField label="Input Field" variant="outlined" sx={{ m: 1 }} />
  
        {/* Card with CardHeader and CardContent */}
        <Card sx={{ m: 1, maxWidth: 300 }}>
          <CardHeader title="Card Title" />
          <CardContent>
            <Typography>Card Content</Typography>
          </CardContent>
        </Card>
  
        {/* Switch */}
        <Switch defaultChecked sx={{ m: 1 }} />
  
        {/* Drawer */}
        <Drawer open={false} sx={{ width: 240 }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Drawer Item" />
            </ListItem>
          </List>
        </Drawer>
  
        {/* Table */}
        <Table sx={{ m: 1, maxWidth: 300 }}>
          <TableHead>
            <TableRow>
              <TableCell>Header 1</TableCell>
              <TableCell>Header 2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Cell 1</TableCell>
              <TableCell>Cell 2</TableCell>
            </TableRow>
          </TableBody>
        </Table>
  
        {/* ListItem with ListItemIcon */}
        <List sx={{ m: 1, maxWidth: 300 }}>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Selected List Item" />
          </ListItem>
        </List>
  
        {/* Avatar */}
        <Avatar sx={{ m: 1 }}>A</Avatar>
  
        {/* LinearProgress */}
        <LinearProgress sx={{ m: 1, maxWidth: 300 }} />
  
        {/* Chip */}
        <Chip label="Chip" sx={{ m: 1 }} />
  
        {/* Paper */}
        <Paper elevation={1} sx={{ m: 1, p: 2, maxWidth: 300 }}>
          <Typography>Paper Content</Typography>
        </Paper>
      </div>
    );
  };