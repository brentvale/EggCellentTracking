import React from 'react';
import ChickenListItem from './chicken_list_item';
import ChickenForm from './chicken_form';

const ChickenList = ({ chickens, receiveChicken }) => {

  const listItems = chickens.map((chicken, idx) => (
      <ChickenListItem key={idx} chicken={chicken}/>
  ));

  return (
    <div>
      <ChickenForm receiveChicken={receiveChicken}/>
      <ul className='list-items'>
          {listItems}
      </ul>
    </div>
  );
}
    

export default ChickenList;