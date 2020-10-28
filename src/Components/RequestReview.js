import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        margin: "30px",
        background: theme.background,
        border: 0,
        borderRadius:3,
        boxShadow:theme.boxShadow,
        color: 'white',
        padding: '0 10px'
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
        
    }

}));

export default function RequestReview(){
    const classes = useStyle();
    
    return(    
        <Card className={classes.root} variant="Outlined">
            <CardContent>
                <Typography className={classes.heading} color="textPrimary">REQUEST REVIEW</Typography>
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
                <Typography className={classes.pos} color="textSecondary" >
                    Reviewer:
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="medium">VIEW CONTENT</Button>
                <br/>
                <br></br>
                <Button size="medium">DETAILS</Button>
                <br></br>
                <Button size="medium">ADD REVIEW</Button>
            </CardActions>
            
        </Card>
        
    )
}

