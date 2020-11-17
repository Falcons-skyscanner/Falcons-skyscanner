import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2,
    },
    paper: {
        padding: theme.spacing(1),
        margin: 'auto',
        maxWidth: 750,
        elevation: 3
    }
}));

export default function Card() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle2">
                                US Airline
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle2">
                                US Airline
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body2" gutterBottom>
                            NEW YORK
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            2020-11-18
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            LONDON
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            2020-11-26
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Grid item xs>
                            <Typography variant="subtitle1" style={{ fontSize: "25px" }}>➡</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="subtitle1" style={{ fontSize: "25px" }}>➡</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body2" gutterBottom>
                            LONDON
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            2020-11-18
                        </Typography>
                        <Grid item xs>
                            <Typography variant="body2" gutterBottom>
                                LONDON
                        </Typography>
                            <Typography variant="body2" color="textSecondary">
                                2020-11-18
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} style={{ backgroundColor: "lightgrey", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Grid item xs>
                            <Typography variant="subtitle1">$100</Typography>
                            <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                Buy
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
