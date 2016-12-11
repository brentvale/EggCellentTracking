import React from 'react';
import EggListItem from './egg_list_item';
import EggForm from './egg_form';

const EggList = ({ eggs, receiveEgg, removeEgg }) => {
  
  const listItems = eggs.map((egg, idx) => (
      <EggListItem key={idx} egg={egg} removeEgg={removeEgg}/>
  ));

  return (
    <div>
      <EggForm receiveEgg={receiveEgg}/>
      <ul className='list-items'>
          {listItems}
      </ul>
    </div>
  );
}
    

export default EggList;