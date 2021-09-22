import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({


    divider: {
        margin: '50px 0',
    },
    about: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 700,
    },
    root: {
        minWidth: 275,
    },
    quote:{
        borderStyle: 'solid',
        borderColor: '#000033',
        padding:20,
        backgroundColor:'#b3b3cc',
        marginLeft:180,
        marginRight:180,
        fontSize:17, 
    },
    aboutUs: {
        padding:20,
        marginLeft:50,
        marginRight:50,
        fontSize:17
        
    },
    table:{
        width:500,
        fontSize:17
        
    
    }

}));