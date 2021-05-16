import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  stars: {
    cursor: 'pointer',
    transition: 'color 200ms',
    color:{
        primary: '#ffc107',
        secondary: '#e4e5e9',
    }
  },
  starInput: {
    display: 'none'
  }
});