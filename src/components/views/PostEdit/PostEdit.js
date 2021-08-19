import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostEdit.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <h2>PostEdit</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostEdit,
  // Container as PostEdit,
  Component as PostEditComponent,
};

/*
import React,  { useState } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne, editPost } from '../../../redux/postsRedux';

import styles from './PostEdit.module.scss';

const Component = ({className, postOne, editPost}) => {
  const [post, setPost] = useState(...postOne);
  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value })
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
  )
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = (state, props) => ({
  postOne: getOne(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  editPost: post => dispatch(editPost(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PostEdit,
  // Container as PostEdit,
  Component as PostEditComponent,
};
*/
