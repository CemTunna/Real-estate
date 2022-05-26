import Subtitle from '@/components/Subtitle';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import rentImg from '@/assets/jpg/rentCategory.jpg';
import sellImg from '@/assets/jpg/sellCategory.jpg';
import Container from '@/components/Container';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  title: {
    color: theme.palette.secondary.main,
    letterSpacing: '0.5px',
  },
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  bodyContainer: {
    display: 'flex',
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  link: {
    marginRight: '2rem',
    textDecoration: 'none',
    transition: 'all .5s ease-out',
    '&:hover': {
      transform: 'scale(1.01)',
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: '0',
      marginBottom: '1rem',
    },
  },
  img: {
    width: '100%',
    marginRight: '2rem',
    border: '1px solid #333',
    borderRadius: '10px',
    overflow: 'hidden',
    height: '10rem',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
  text: {
    textAlign: 'center',
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
    fontSize: '20px',
  },
}));

const Explore = () => {
  const { classes } = useStyles();

  return (
    <Container>
      <header>
        <Subtitle>Explore</Subtitle>
      </header>

      <main className={classes.main}>
        {/* slider */}

        <Typography variant='h4' className={classes.title}>
          Categories
        </Typography>
        <Grid className={classes.bodyContainer}>
          <Link to='/category/rent' className={classes.link}>
            <img
              src={rentImg}
              alt='renting'
              width={200}
              height={150}
              className={classes.img}
            />
            <Typography className={classes.text}>Rent</Typography>
          </Link>
          <Link to='/category/sell' className={classes.link}>
            <img src={sellImg} alt='selling' className={classes.img} />
            <Typography className={classes.text}>Sell</Typography>
          </Link>
        </Grid>
      </main>
    </Container>
  );
};

export default Explore;
