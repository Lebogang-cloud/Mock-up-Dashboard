import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    root: {
        minWidth: 275,
        margin: "70px"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        fontSize: 14
    },
    pos:{
        marginBottom: 12
    }
});

export default function Feedback(){
    const classes = useStyle();
    
    return(
        <Card className={classes.root} variant="Outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Topic: 
                </Typography>
            </CardContent>
        </Card>
    )
}