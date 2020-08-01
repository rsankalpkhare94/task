import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './styles.scss';

const Card = ({data}) => (
 
  <div className={cn('card')}>
  <h1>{data.name}</h1>
  <p>{data.details}</p>
  </div>
);

export default Card;

Card.propTypes = {
  name:PropTypes.string,
  details:PropTypes.string
};
