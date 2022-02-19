import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
      width: '100%',
      padding: '1rem',
      marginBottom: '10px',
      background: '#111827',
    // [theme.breakpoints.up('sm')]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
  },
  toolBar: {
    width: '100%'
  },

  gridContainer: {
    width: '100%'
  },

  navbarItem:{
    color: '#fff', 
    textDecoration:'none'
}

}));