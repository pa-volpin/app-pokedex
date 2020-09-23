import React from 'react';
import propTypes from 'prop-types';
import Image from './Image.js';
import Pokecard from './Pokecard.js';
import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight: weight, image, moreInfo} = this.props.pokemon;
    const { link } = this.props;
    const altText = `Pokemon ${name} image`
    return (
      <div className='card'>
        <Pokecard name={name} type={type} weight={weight.value} unit={weight.measurementUnit} more={moreInfo} linkToDetails={link} />
        <Image src={image} alt={altText} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: propTypes.string,
  type: propTypes.string,
  weight: propTypes.number,
  unit: propTypes.string,
  image: propTypes.string
}

export default Pokemon;