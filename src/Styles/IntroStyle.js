import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme)=>({
    introImg:{
        width: '75%',
       '@media (max-width:786px)':{
            width: '100%', 
            marginTop:'10px',
            justifyContent:"center",
            alignItems:'center'
        }
    },
    purple:{
        color:'#c95bf5' 
    }
}))