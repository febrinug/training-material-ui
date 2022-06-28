import { blueGrey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      '& .MuiGrid-item': {
        [theme.breakpoints.up(767)]: {
          background: 'black !important',
        }
      },

      '& .MuiPaper-root': {
          background: 'green !important',
      }
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));