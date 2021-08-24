import React,  { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOnePost, fetchPostById } from '../../../redux/postsRedux';

import styles from './Post.module.scss';
import Fab from '@material-ui/core/Fab';

const Component = ({className, postOne, fetchPostById}) => {
  useEffect(() => {
    fetchPostById();
  }, []);

  const [login, setLogin] = useState(false);
  const handleChange = (event) => {
    setLogin(!login);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Link className={styles.switchState} to='#' onClick={handleChange}>
        {login ? 'if Author or Admin:' : 'if no Author or Admin:'}
      </Link>
        <div className={styles.postCard} key={postOne.id}>          
            <div>
              <img className={styles.image} src={postOne.image} alt='' />
              <div>
                <h3 className={styles.title}>{postOne.title}</h3>
                <p className={styles.info}>Location: {postOne.location}</p>
                <p className={styles.info}>Added: {postOne.publicationDate}</p>
                <p className={styles.about}>{postOne.content}</p>
                <p className={styles.info}>Price: {postOne.price}$</p>
                <p className={styles.info}>Email: {postOne.email} </p>
                <p className={styles.info}>Phone number: {postOne.phone} </p>
                <p className={styles.info}>Edited: {postOne.updateDate}</p>
                <p className={styles.info}>Status: {postOne.status}</p>
                {login && (
                <Link className={styles.button} to={`/post/${postOne.id}/edit`}>
                  <Fab
                    size='small'
                    color='primary'
                    aria-label='add'
                    variant='extended'
                  >
                    Edit Post
                  </Fab>
                </Link>
                )}
              </div>
            </div>
          
        </div>
    </div>
  )
};


Component.propTypes = {
  className: PropTypes.string,
  fetchPostById: PropTypes.func,
  match: PropTypes.object,
  params: PropTypes.object,
  postOne: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = (state, props) => ({
  postOne: getOnePost(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  fetchPostById: () => dispatch(fetchPostById(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
