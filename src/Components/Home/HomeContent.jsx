import React from 'react';
import ContentFill from './ContentFill'
import db from '../assets/db.json'
import './HomeContent.css'

const HomeContent = ({sort_index}) => {
  return (
    <div className='content_container'>

      {db.map((item) => {

        if (!sort_index) //"!sort_index = !2 = 0"
        {
          return <ContentFill key={item.id} {...item} />
        }

        if (sort_index === item.category)
        {
          return <ContentFill key={item.id} {...item} />
        }
        
      })}
      
    </div>
    )
}
export default HomeContent;