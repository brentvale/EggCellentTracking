import React from 'react';

class ChickenListItem extends React.Component{
  render() {
    const { chicken } = this.props;
    const { id, chicken_name, biography, arrival_date, departure_date } = chicken;
    
    return (
      <div id={chicken_name}>
          <p>chicken id: {id}</p>
          <p>chicken name: {chicken_name}</p>
          <p>{arrival_date} - {departure_date}</p>
          <p>biography: {biography}</p>
      </div>
    );
  }
}

export default ChickenListItem;