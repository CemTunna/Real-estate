import Subtitle from '@/components/Subtitle';
import { Grid, Slider, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import rentImgW500 from '@/assets/images/rent/rentCategory,w_500.jpg';
import rentImgW1101 from '@/assets/images/rent/rentCategory,w_1101.jpg';
import rentImgW1500 from '@/assets/images/rent/rentCategory,w_1500.jpg';
import sellImgW500 from '@/assets/images/sell/sellCategory,w_500.jpg';
import sellImgW1175 from '@/assets/images/sell/sellCategory,w_1175.jpg';
import sellImgW1500 from '@/assets/images/sell/sellCategory,w_1500.jpg';
import Container from '@/components/Container';
import useStyles from './ExploreStyles';
import H4 from '@/components/ui/H4/H4';
import Text from '@/components/ui/Text/Text';
const Explore = () => {
  const { classes } = useStyles();

  return (
    <Container>
      <header>
        <Subtitle>Explore</Subtitle>
      </header>

      <main className={classes.main}>
        <Slider />
        <H4>Categories</H4>
        <Grid className={classes.bodyContainer}>
          <Link to='/category/rent' className={classes.link}>
            <picture>
              <img
                src={rentImgW500}
                loading='lazy'
                alt='renting'
                width={200}
                height={150}
                className={classes.img}
                srcSet={`${rentImgW500} 500w, ${rentImgW1101} 1101w, ${rentImgW1500} 1500w`}
              />
            </picture>
            <Text className={classes.text}>Rent</Text>
          </Link>
          <Link to='/category/sell' className={classes.link}>
            <picture>
              <img
                loading='lazy'
                src={sellImgW500}
                width={200}
                height={150}
                srcSet={`${sellImgW500} 500w, ${sellImgW1175} 1175w, ${sellImgW1500} 1500w`}
                alt='selling'
                className={classes.img}
              />
            </picture>
            <Text className={classes.text}>Sell</Text>
          </Link>
        </Grid>
      </main>
    </Container>
  );
};

export default Explore;
