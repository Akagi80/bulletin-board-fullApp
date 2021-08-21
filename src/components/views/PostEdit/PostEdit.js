import React,  { useState } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { NotFound } from '../NotFound/NotFound';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne, editPost } from '../../../redux/postsRedux';

import styles from './PostEdit.module.scss';

const Component = ({className, postOne, editPost}) => {
  const [login, setLogin] = useState(false);
  const [post, setPost] = useState(...postOne);

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value })
  }
  const handleChange2 = (event) => {
    setLogin(!login)
  }

  const submitForm = (event) => {
    event.preventDefault();
    if(post.title.length > 1 && post.content.length > 1 && post.email){
      post.updateDate = new Date().toISOString();
      editPost(post);

      setPost({
        id: '',
        title: '',
        location: '',
        publicationDate: '',
        content: '',
        price: '',
        email: '',
        phone: '',
        image: '',
        updateDate: '',
        status: ''
      });
    } else {
      alert('Please complete all fields');
    }
  }

  return (
    <div className={clsx(className, styles.root)}>
      <Link className={styles.switchState} to='#' onClick={handleChange2}>
        {login ? 'if Author or Admin:' : 'if no Author or Admin:'}
      </Link>

      {login && (
        <div>
          <h2>Post Edit</h2>
          <form className={styles.changesForm} action="/contact/send-message" method="POST" enctype="multipart/form-data" onSubmit={submitForm}>
            <label className={styles.formInput}>
              Title: <input type="text" name="title" value={post.title} onChange={handleChange}></input>
            </label>
            <label className={styles.formInput}>
              Location: <input type="text" name="location" value={post.location} onChange={handleChange}></input>
            </label>
            <label className={styles.formInput}>
              Description: <textarea type="text" name="content" value={post.content} onChange={handleChange}></textarea>
            </label>
            <label className={styles.formInput}>
              Price: <input type="text" name="price" value={post.price} onChange={handleChange}></input>
            </label>
            <label className={styles.formInput}>
              Email: <input type="text" name="email" value={post.email} onChange={handleChange}></input>
            </label>
            <label className={styles.formInput}>
              Phone number: <input type="text" name="phone" value={post.phone} onChange={handleChange}></input>
            </label>
            <label className={styles.formInput}>
              Image: <input type="file" name="image" accept=".png, .gif, .jpg" onChange={handleChange}></input>
            </label>
            <button type="submit">Submit changes</button>
          </form>
      </div>
      )}
      {!login && (
        <NotFound />
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

const mapDispatchToProps = dispatch => ({
  editPost: post => dispatch(editPost(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
