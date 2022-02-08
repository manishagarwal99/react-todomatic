import React from 'react';
import {FcTodoList} from 'react-icons/fc'

export const Header = (props) => {
  return <header className='header'>
      <h1 >{props.title} <FcTodoList />
      </h1>
      </header>
};

Header.defaultProps = {
    title: "Todomatic",
}


export default Header;