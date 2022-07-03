import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
media: {
    height: 260,
    marginBottom:'1rem',
},
cardContent: {
    display: 'grid',
    justifyContent: 'space-between',
},
cartActions: {
    justifyContent: 'space-between',
},
buttons: {
    display: 'flex',
    alignItems: 'center',
},

}));