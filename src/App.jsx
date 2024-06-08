import React, { useEffect, useState } from 'react';
import { fetchData } from '../api'; 
import {
  Container,
  TextField,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import './App.css'; 

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result);
    };
    getData();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="app-container">
      <Typography variant="h4" gutterBottom className="app-title">
        Data List
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={handleSearchChange}
        className="app-search"
      />
      <List className="app-list">
        {filteredData.map(item => (
          <ListItem key={item.id} className="app-list-item">
            <ListItemText 
              primary={item.title} 
              secondary={item.body} 
              className="app-list-item-text" 
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default App;
