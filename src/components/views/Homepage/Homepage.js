import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Fab from '@material-ui/core/Fab';

// Widok oparty na materiam-ui Components / Surfaces / Card
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Component = ({ className, postsAll }) => {
  const classes = useStyles();
  const [login, setLogin] = useState();

  const handleChange = (event) => {
    setLogin(!login);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Link to='#' onClick={handleChange}>
        {login ? 'if Login:' : 'if Logout:'}
      </Link>

      {login && (
        <div>
          <Link className={styles.button} to={'/post/add'}>
            <Fab
              size='small'
              color='primary'
              aria-label='add'
              variant='extended'
            >
              Add new post
            </Fab>
          </Link>
        </div>
      )}

      <div className={styles.card}>
        {postsAll.map((post) => (
          <Card key={post.id} className={styles.cardItem}>
            <CardHeader
              avatar={
                <Avatar aria-label='recipe' className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              }
              title={post.title}
              subheader={post.publicationDate}
            />

            <CardActionArea>
              <CardMedia
                className={styles.image}
                component='img'
                image={post.image}
                title={post.title}
              />
              <CardContent>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                  {post.content}
                </Typography>
                <div>
                <Typography className={styles.price} component='p' variant='subtitle2'>
                    Price: {post.price}$
                  </Typography>
                  <Typography className={styles.location} component='p' variant='subtitle2'>
                    Location: {post.location}
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  postsAll: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      publicationDate: PropTypes.string,
      updateDate: PropTypes.string,
      email: PropTypes.string,
      status: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.string,
      phone: PropTypes.string,
      location: PropTypes.string,
    })
  ),
};

const mapStateToProps = state => ({
  postsAll: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
