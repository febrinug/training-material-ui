import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  
    cardContainer: {
      height: 200,
      padding: 10,
    }
  });

function Media(props) {

    const classes = useStyles();
    const { loading = false } = props;

  return (
    <>
        <div>
            <Grid container spacing={2}>
                {
                    [1,2,3,4,5,6].map((val, key) => {
                        return (
                            <Grid item xs={4} key={key}>
                                <Card className={classes.cardContainer}>
                                    <Skeleton
                                        variant="rect"
                                        animation="wave"
                                        width="100%"
                                        height={150}
                                        // style={{ padding: 10 }}
                                    />
                                    <div>
                                        <Skeleton 
                                            variant="rect"
                                            animation="wave"
                                            width="100%"
                                            height={25}
                                        />
                                    </div>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    </>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box overflow="hidden">
      <Media loading />
      <Media />
    </Box>
  );
}
