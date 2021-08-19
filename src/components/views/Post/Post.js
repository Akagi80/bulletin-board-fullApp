import React,  { useState } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne } from '../../../redux/postsRedux';
import Fab from '@material-ui/core/Fab';

import styles from './Post.module.scss';

const Component = ({className, postOne}) => {
  const [login, setLogin] = useState(false);
  const handleChange = (event) => {
    setLogin(!login);
  };

  return (    
    <div className={clsx(className, styles.root)}>
      <Link to='#' onClick={handleChange}>
        {login ? 'if Author or Admin:' : 'if no Author or Admin:'}
      </Link>
      {login && (
        <div>
          {postOne.map(post => (
            <div key={post.id}>
              <img className={styles.image} src={post.image} alt='' />
              <div>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.info}>Price: {post.price}</p>
                <p className={styles.about}>{post.content}</p>
                <p className={styles.info}>Location: {post.location}</p>
                <p className={styles.info}>Added: {post.publicationDate}</p>
                <p className={styles.info}>Edited: {post.updateDate}</p>
                <p className={styles.info}>email: {post.email} </p>
                <p className={styles.info}>phone number: {post.phone} </p>
                <p className={styles.info}>Status: {post.status}</p>     
                <Link className={styles.button} to={`/post/${post.id}/edit`}>
                  <Fab
                    size='small'
                    color='primary'
                    aria-label='add'
                    variant='extended'
                  >
                    Edit Post
                  </Fab>
                </Link>
              </div>
            </div>  
          ))}
        </div>
      )}
      {!login && (
        <div className={styles.card}>
          -----Nie przechodzi testu-----
        </div>
      )}
    </div>
  )
};

Component.propTypes = {
  className: PropTypes.string,
  postsOne: PropTypes.arrayOf(
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

const mapStateToProps = (state, props) => ({
  postOne: getOne(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
