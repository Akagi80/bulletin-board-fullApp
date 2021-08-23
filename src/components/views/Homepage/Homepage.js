import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, fetchPublished } from '../../../redux/postsRedux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
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

const Component = ({ className, postsAll, fetchPublishedPosts }) => {
  React.useEffect(() => {
    fetchPublishedPosts();
  }, []);

  const classes = useStyles();
  const [login, setLogin] = useState();

  const handleChange = (event) => {
    setLogin(!login);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Link className={styles.switchState} to='#' onClick={handleChange}>
        {login ? 'if Login:' : 'if Logout:'}
      </Link>

      <div className={styles.card}>
        {postsAll.map((post) => (
          <Card key={post.id} className={styles.card__item}>
            <CardHeader
              avatar={
                <Avatar aria-label='recipe' className={classes.avatar}>
                  R
                </Avatar>
              }
              title={post.title}
            />

            <CardActionArea
              href={`/post/${post._id}`}>
              <CardMedia
                className={styles.image}
                component='img'
                image={post.photo}
              />
              <CardContent>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                >
                </Typography>
                <div>
                <Typography className={styles.author} component='p' variant='subtitle2'>
                    Author: {post.author}
                  </Typography>
                  <Typography className={styles.created} component='p' variant='subtitle2'>
                    Created: {post.created}
                  </Typography>
                  <Typography className={styles.click} component='p' variant='subtitle2'>
                    Click on card to see more!
                  </Typography>
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      {login && (
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
      )}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  fetchPublishedPosts: PropTypes.any,
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

const mapDispatchToProps = (dispatch) => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
