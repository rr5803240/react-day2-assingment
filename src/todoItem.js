import React from 'react';

export default function TodoItemComponent(props) {
    const {index, text, checked, handleCheckboxClick,handleCheckboxClick1} = props;
    const styleValue = checked ? 'line-through' : '';
    return (
     <div>
      <label>
        <input 
          type="checkbox" 
          checked={checked}
          onChange={e => handleCheckboxClick(index)}
          />
      </label>
      <span style={{textDecoration:styleValue}}>{text}</span>
      <a onClick={e => handleCheckboxClick1(index)}>&#x274c;</a>
      </div>
    );
  }