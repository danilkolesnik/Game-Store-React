import React, { useState } from "react";
import HomeContent from '../Home/HomeContent';
import './Collection.css'

let sort
function Collection({ list, label }) {

  const [activeItem, setActiveItem] = useState(0);
  const onSelectItem = (index) => {
    setActiveItem(index);
    sort = index;
  }

  const [activeLabel, setActiveLabel] = useState(3);
  const onSelectLabel = (label_index) => {
    setActiveLabel(label_index);
    setVisibleMenu(false)
    if (label_index === 3) { onRelevanceLabel() }
    if (label_index === 2) { onNameLabel() }
    if (label_index === 1) { onPriceDownLabel() }
    if (label_index === 0) { onPriceUpLabel() }
  }

  const onRelevanceLabel = () => {
    const childrenSort = document.querySelector(".content_container").childNodes
    const relevanceSort = [];
    childrenSort.forEach(num => relevanceSort.push(num))
    relevanceSort.sort((a, b) => {
      return a.attributes.popularity.value - b.attributes.popularity.value
    }).reverse()
    document.querySelector(".content_container").innerHTML = ''
    document.querySelector(".content_container").append(...relevanceSort)
  }



  const onPriceUpLabel = () => {
    const childrenSort = document.querySelector(".content_container").childNodes
    const priceSort = [];
    childrenSort.forEach(num => priceSort.push(num))
    priceSort.sort((a, b) => {
      return a.attributes.price.value - b.attributes.price.value
    })
    document.querySelector('.content_container').innerHTML = ''
    document.querySelector(".content_container").append(...priceSort)
  }

  const onPriceDownLabel = () => {
    const childrenSort = document.querySelector(".content_container").childNodes
    const priceSort = [];
    childrenSort.forEach(num => priceSort.push(num))
    priceSort.sort((a, b) => {
      return a.attributes.price.value - b.attributes.price.value
    }).reverse()
    document.querySelector('.content_container').innerHTML = ''
    document.querySelector(".content_container").append(...priceSort)
  }

  const onNameLabel = () => {
    const childrenSort = document.querySelector(".content_container").childNodes
    const nameSort = [];
    childrenSort.forEach(num => nameSort.push(num))
    nameSort.sort((a, b) => {
      return a.children[1].outerText.charCodeAt() - b.children[1].outerText.charCodeAt()
    })
    document.querySelector('.content_container').innerHTML = ''
    document.querySelector(".content_container").append(...nameSort)
  }

  const [visibleMenu, setVisibleMenu] = useState(false);
  const onVisibleMenu = () => {
    setVisibleMenu(!visibleMenu);
  }

  const sortRef = React.useRef();
  const handleClickOut = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setVisibleMenu(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleClickOut);
    onRelevanceLabel();
  }, []);

  return (
    <div>

      <div className="category_block">
        <h1 className="handler">Categories</h1>
      </div>
      
      {/* Categoty Sorter  */}
      <div className="container_list">
        <ul className="list">
          {
            list.map((item, index) =>
            (<li
              key={`${item}_${index}`}
              className= {activeItem === index ? 'active_item' : 'item'}
              onClick = {() =>  onSelectItem(index)}
            >
              {item}
            </li>)
            )
          }
        </ul>
        


        {/* Modal Sort Window  */}

        <div ref={sortRef} className="sorting_block">

          <span className='item-sorter' onClick={() => { onVisibleMenu() }}>Sort By {label[activeLabel]}</span>

          {
            visibleMenu && (
            <div className='drop_menu'>
              <ul className='sort_list'>
                    {
                      label.map((sortlabel, label_index) =>
                        <li
                          key={`${sortlabel}_${label_index}`}
                          className='sort_list_elem'
                          onClick={() => onSelectLabel(label_index)}
                        >
                          { sortlabel }
                        </li>)
                    }

              </ul>
            </div>
            )
          }

        </div>
      </div>

      <HomeContent sort_index={sort}/>
      
    </div>
    
    )
}

export default Collection

