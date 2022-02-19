import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container:{
    paddingTop: '50px'
  },
  card:{
    background:'rgba(0,0 ,0 , .3)',
    maxWidth:'350px',
    padding:'5px 40px', 
    display:'flex', 
    justifyContent:'center', 
    gap:'10px',
  }
}));