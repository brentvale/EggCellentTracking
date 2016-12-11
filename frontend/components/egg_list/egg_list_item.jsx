import React from 'react';

class EggListItem extends React.Component{
  render() {
    const { egg, removeEgg } = this.props;
    const { id, chicken_id, find_date } = egg;
    
    return (
      <div>
        <p>egg id: {id}</p>
        <p>chicken id: {chicken_id}</p>
        <p>find date: {find_date}</p>
    
        <button onClick={ removeEgg }>Delete Egg</button>
      </div>
    );
  }
}

export default EggListItem;