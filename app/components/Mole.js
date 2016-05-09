import React from 'react';

export default class Mole extends React.Component {
  render() {
    const { isOut, onMoleClick } = this.props;

    return (
      <span className="hole" onClick={onMoleClick}>
      <img className={getMoleClass(isOut)} src="images/mole.png"/>
      </span>
    );
  }
}

function getMoleClass(isOut) {
  const animation = isOut ? 'pop-out' : 'pop-in'; 
  return `mole ${animation}`;
}