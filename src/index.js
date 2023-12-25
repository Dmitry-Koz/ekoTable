import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';

// function createData(id, name, calories, fat, carbs, protein, ggt=1, eegt='efdf') {
//   return {
//     id,
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     ggt,
//     eegt
//   };
// }

// const rows = [
//   createData(1, 'Cupcake', 305, 3.7, 67, 4.3, 2),
//   createData(2, 'Donut', 452, 25.0, 51, 4.9, 9),
//   createData(3, 'Eclair', 262, 16.0, 24, 6.0),
//   createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
//   createData(6, 'Honeycomb', 408, 3.2, 87, 6.5),
//   createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0),
// ];
// // const headCells = [
//   {
//     id: 'name',
//     numeric: false,
//     disablePadding: true,
//     label: 'Dessert (100g serving)',
//   },
//   {
//     id: 'calories',
//     numeric: true,
//     disablePadding: false,
//     label: 'Calories',
//   },
//   {
//     id: 'fat',
//     numeric: true,
//     disablePadding: false,
//     label: 'Fat (g)',
//   },
//   {
//     id: 'carbs',
//     numeric: true,
//     disablePadding: false,
//     label: 'Carbs (g)',
//   },
//   {
//     id: 'protein',
//     numeric: true,
//     disablePadding: false,
//     label: 'Protein (g)',
//   },
//   {
//     id: 'protein2',
//     numeric: true,
//     disablePadding: false,
//     label: 'Protein (g)2',
//   },
//   {
//     id: 'protein3',
//     numeric: true,
//     disablePadding: false,
//     label: 'Protein (g)3',
//   },
// ];


ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      
      <App/>
      
    </StyledEngineProvider>
  </React.StrictMode>
);
