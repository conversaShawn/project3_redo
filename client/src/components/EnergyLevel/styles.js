// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({
//     starInput: {
//         display: 'none'
//     },
//     [theme.getMuiTheme]: {
//       stars: {
//         cursor: 'pointer',
//         transition: 'color 200ms',
//     },
//         palette: {
//         primary: '#ffc107',
//         secondary: '#e4e5e9'
//     }
// }}));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  starInput: {
    display: 'none'
  },
  // bring form to top during mobile responsive
  [theme.palette]: {
    stars: {
        color: '#ffc107'
  }}
}));