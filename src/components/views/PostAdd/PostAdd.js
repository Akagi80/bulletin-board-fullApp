import React,  { useState } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { NotFound } from '../NotFound/NotFound';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, addPost, fetchAddPost} from '../../../redux/postsRedux';

import styles from './PostAdd.module.scss';

const Component = ({className, addPost, fetchAddPost}) => {
  const [login, setLogin] = useState(false);
  const [post, setPost] = useState('');

  const handleChange = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  }

  const handleChange2 = (event) => {
    setLogin(!login)
  }

  const submitForm = (event) => {
    event.preventDefault();
    if(post.title.length > 1 && post.content.length > 1 && post.email){
      post.created = new Date().toISOString();
      addPost(post);
      fetchAddPost(post);
      console.log('add', post);

      setPost({
        // id: '',
        email: '',
        created: '',
        updated: '',
        status: '',
        title: '',
        text: '',
        photo: '',
        price: '',
        phone: '',
        location: ''
      });
    } else {
      alert('Please complete all fields');
    }
  }

  return (
    <div className={clsx(className, styles.root)}>
      <Link className={styles.switchState} to='#' onClick={handleChange2}>
        {login ? 'if Login:' : 'if not Login:'}
      </Link>

      {login && (
        <div>
          <h2>Post Add</h2>
          <form className={styles.changesForm} action="/contact/send-message" method="POST" enctype="multipart/form-data" onSubmit={submitForm}>
            <label className={styles.formInput}>
              Title: <input type="text" name="title" value={post.title} onChange={handleChange}></input>
            </label>
            <label className={styles.formInput}>
              Location: <input type="text" name="location" value={post.location} onChange={handleChange}></input>
            </label>
            <label className={styles.formInput}>
              Description: <textarea type="text" name="content" value={post.text} onChange={handleChange}></textarea>
            </label>
            <label className={styles.formInput}>
              Price: <input type="text" name="price" value={post.price} onChange={handleChange}></input>
            </label>
            <label className={styles.formInput}>
              Email: <input type="text" name="email" value={post.author} onChange={handleChange}></input>
            </label>
            <label className={styles.formInput}>
              Phone number: <input type="text" name="phone" value={post.phone} onChange={handleChange}></input>
            </label>
            <label className={styles.formInput}>
              Image: <input type="file" name="image" accept=".png, .gif, .jpg" onChange={handleChange}></input>
            </label>
            <label className={styles.formInput}>
              Status: <input type="text" name="status" value={post.status} onChange={handleChange}></input>
            </label>
            <button type="submit">Submit</button>
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
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  postsAll: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
  fetchAddPost: post => dispatch(fetchAddPost(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostAdd,
  Container as PostAdd,
  Component as PostAddComponent,
};
