import React, { useState } from 'react'
import ArrowDown from "../../public/icons/ArrowDown/ArrowDown"
import { useTranslation } from 'next-i18next'

function SubCategoriesItem({categories, handleCategoryClick, idx}:any) {
  const [open, setOpen] = useState(false)
  const { t }:any = useTranslation("common")

  if(categories?.children && categories?.children.length > 0) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
      <div onClick={() => {
        setOpen(!open)
        handleCategoryClick && handleCategoryClick(categories.id, idx+1)
      }
        } className='sidebar-title'>
              <span>
                  {t(categories?.name)}
              </span>
              <span  className='toggle-btn'><ArrowDown /></span>
          </div>
          <div className='sidebar-content'>
          { categories?.children.map((child: any, index: any) => 
          <SubCategoriesItem 
            idx={index} 
            handleCategoryClick={handleCategoryClick} 
            key={child.id} 
            categories={child} />
          ) }
          </div>
      </div>
    )
  }else{
    return (
      <div onClick={() => handleCategoryClick(categories.id, idx + 1)} className="sidebar-item plain">
                <span>{t(categories.name)}</span>
      </div>
    )
}
}

export default SubCategoriesItem