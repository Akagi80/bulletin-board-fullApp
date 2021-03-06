import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './NotFound.module.scss';
import Fab from '@material-ui/core/Fab';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h2 className={styles.title}>Page Not Found</h2>

    <Link className={styles.button} to={'/'}>
      <Fab
        size='small'
        color='primary'
        aria-label='add'
        variant='extended'
      >
        Back to Homepage
      </Fab>
    </Link>
    
  </div>
);

Component.propTypes = {
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
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
