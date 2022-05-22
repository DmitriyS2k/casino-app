import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import userStore from '../../store/userStore';

function UserListControlPanel({ fnLimit }) {
  const { searchMethod, getUsersData } = userStore;
  const [limitUsersList, setLimitUsersList] = React.useState(10);
  const [searchColumn, setSearchColumn] = React.useState('A1');
  const [textSearchField, setTextSearchField] = React.useState('');

  const limitFn = (e) => {
    setLimitUsersList(e.target.value);
    fnLimit(e.target.value);
  };

  const handleChange = (event) => {
    setSearchColumn(event.target.value);
  };

  React.useEffect(() => {
    async function Data() {
      await getUsersData();
      searchMethod(textSearchField, searchColumn);
    }
    Data();
  }, [textSearchField, searchColumn]);

  return (
    <div className="control-panel">
      <Box sx={{ minWidth: 100, maxWidth: 100 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Кол-во</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={limitUsersList}
            label="Кол-во"
            onChange={limitFn}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: 300 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Поиск"
            variant="outlined"
            onChange={(e) => {
              setTextSearchField(e.target.value);
            }}
          />
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">В какой ячейке?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={searchColumn}
              label="В какой ячейке?"
              onChange={handleChange}
            >
              <MenuItem value="A1">A1</MenuItem>
              <MenuItem value="A2">A2</MenuItem>
              <MenuItem value="A3">A3</MenuItem>
              <MenuItem value="A4">A4</MenuItem>
              <MenuItem value="B1">B1</MenuItem>
              <MenuItem value="B2">B2</MenuItem>
              <MenuItem value="B3">B3</MenuItem>
              <MenuItem value="B4">B4</MenuItem>
              <MenuItem value="C1">C1</MenuItem>
              <MenuItem value="C2">C2</MenuItem>
              <MenuItem value="C3">C3</MenuItem>
              <MenuItem value="C4">C4</MenuItem>
              <MenuItem value="D1">D1</MenuItem>
              <MenuItem value="D2">D2</MenuItem>
              <MenuItem value="D3">D3</MenuItem>
              <MenuItem value="D4">D4</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
}

export default UserListControlPanel;
