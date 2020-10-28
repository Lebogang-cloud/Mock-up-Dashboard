import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    root: {
        Width: '100%',
        marginTop: "10px",
        marginLeft: "10px",
        marginBottom: "40px",
        background: theme.background,
        border: 0,
        borderRadius:3,
        boxShadow:theme.boxShadow,
        color: 'white',
        
    },
   
    title: {
        fontSize: 14
    },
    pos:{
        marginBottom: 12
    },
    heading:{
        textAlign:'center',
        fontSize:'25px',
        fontVariant:'h1'
        
    },
    card:{
        maxWidth:300
    },

}));

export default function AssignedCard(){
    const classes = useStyle();
    
    return(    
        <div className={classes.root}>
        <Card className={classes.card} variant="Outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Topic: 
                    <br></br>
                    Card id:
                </Typography>
                <Typography className={classes.title} color="primary">
                    Introduction to Tilde
                </Typography>
                <br></br>
                <Typography className={classes.pos} color="textSecondary" >
                    Assignee:
                </Typography>
                </CardContent>
                <CardActions>
                    <br/>
                    <br/>
                <Button size="medium">VIEW CONTENT</Button>
                <br/>
                <br></br>
                <Button size="medium">DETAILS</Button>
                <br></br>
                <Button size="medium">START TOPIC</Button>
            </CardActions>
            
        </Card>
        </div>
        
    )

    
}



