import * as React from 'react';
import Box from '@mui/material/Box';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, colors, ThemeProvider } from '@mui/material/';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    background: {
      default: 'ffa84c',
    },
  },
});

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last',
    width: 150,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 110,
    editable: true,
  },
  {
    field: 'time',
    headerName: 'Time',
    width: 110,
    editable: true,
  },
  {
    field: 'reason',
    headerName: 'Reason',
    width: 200,
    editable: true,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 150,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 110,
    editable: true,
  },
];

const rows = [
  {
    id: 12380,
    lastName: 'Huang',
    firstName: 'Tim',
    date: '11/1/2022',
    time: 'N/A',
    reason: 'Sick',
    type: 'Excused Absence',
    status: 'Confirmed',
  },
  {
    id: 53230,
    lastName: 'Bob',
    firstName: 'Bill',
    date: '11/2/2022',
    time: '9:49 AM',
    reason: 'N/A',
    type: 'Tardy',
    status: 'Confirmed',
  },
  {
    id: 25308,
    lastName: 'Cooper',
    firstName: 'Jane',
    date: '11/2/2022',
    time: '10:20 AM',
    reason: 'Dentist Appointment',
    type: 'Early Dismissal',
    status: 'Confirmed',
  },
  {
    id: 89502,
    lastName: 'Bell',
    firstName: 'Jerome',
    date: '11/2/2022',
    time: 'N/A',
    reason: 'Sick',
    type: 'Excused Absence',
    status: 'Confirmed',
  },
  {
    id: 58092,
    lastName: 'Huang',
    firstName: 'Jim',
    date: '11/2/2022',
    time: 'N/A',
    reason: 'Sick',
    type: 'Excused Absence',
    status: 'Confirmed',
  },
  {
    id: 43240,
    lastName: 'Doe',
    firstName: 'Jill',
    date: '11/2/2022',
    time: 'N/A',
    reason: 'Doctor Appointment',
    type: 'Excused Absence',
    status: 'Pending',
  },
];

export default function DataGridDemo() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box m="20px">
        <Typography
          variant="h3"
          component="h3"
          sx={{ textAlign: 'left', mt: 1, mb: 3 }}
        >
          Attendance Table
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          m="40px 0 0 0"
          height="75vh"
          boxShadow="2"
          borderRadius="20px"
          sx={{
            bgcolor: colors.grey[200],
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            bgcolor="#404040"
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
