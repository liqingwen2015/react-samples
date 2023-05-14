import React, { useState } from 'react'
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import MenuItems from "./data/menu";

const allCategories = ['all', ...new Set(MenuItems.map(item => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(MenuItems)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(MenuItems);
      return;
    }

    const newItems = MenuItems.filter((item) => item.category === category)
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className='menu action'>
        <div className='title'>
          <h2>美食美客 - 菜单</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}></Categories>
        <Menu items={menuItems}></Menu>
      </section>
    </main>
  )
}

export default App;