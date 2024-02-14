import { HomeProps } from '@/pages/index';
import React from 'react';
import SubCategoriesItem from "./SubCategoriesItem"


function CategoriesSection({ catData, handleCategoryClick, t }: HomeProps) {
  
  return (
    <section className='categories-section'>
      <h3>{t("filter_categories")}</h3>
      <div className='categories_container'>
        <ul
        className='categories_all'
          onClick={() => {
            handleCategoryClick && handleCategoryClick(null, null);
          }}
        >
          <li className='categories_all_li'>{t("all")}</li>
        </ul>
          {catData?.map((cat, idx) => {
            return (
              <React.Fragment key={cat.id}>
               <SubCategoriesItem t={t} handleCategoryClick={handleCategoryClick} categories={cat} idx={idx} />
              </React.Fragment>
            )
          })}
      </div>
    </section>
  );
}

export default CategoriesSection;


// import { HomeProps } from '@/pages/index';
// import React, { useState } from 'react';
// import { Menu } from 'antd';
// import { CaretRightOutlined } from '@ant-design/icons';


// interface Category {
//   id: number;
//   name: string;
//   children?: Category[];
// }


// function CategoriesSection({ catData, handleCategoryClick }: HomeProps) {


//   const [openCategories, setOpenCategories] = useState<number[]>([]);
//   const [activeCategory, setActiveCategory] = useState<number | null>(null);

//   const handleCategoryToggle = (categoryId: number, idx: number) => {
//     if (openCategories.includes(categoryId)) {
//       setOpenCategories([]);
//       setActiveCategory(null);
//     } else {
//       setOpenCategories([categoryId]);
//       setActiveCategory(categoryId);
//     }
//     handleCategoryClick && handleCategoryClick(categoryId, idx + 1);
//   };

//   const renderMenu = (categories: Category[] | undefined) => {
//     if (!categories) {
//       return null; // or handle the case when categories is undefined
//     }

//     return categories.map((category, idx) => {
//       const uniqueKey = `${category.id}_${idx}`;

//       const hasChildren = category.children && category.children.length > 0;
//       const isCategoryOpen = openCategories.includes(category.id);

//       return (
//         <React.Fragment key={category.id}>
//           {hasChildren ? (
//             <Menu.SubMenu
//             key={category.id}
//             title={category.name}
//             icon={<CaretRightOutlined />}
//             onTitleClick={() => handleCategoryToggle(category.id, idx)}
//           >
//             {renderMenu(category.children)}
//           </Menu.SubMenu>
//           ) : (
//             <Menu.Item
//               key={category.id}
//               onClick={() => handleCategoryClick && handleCategoryClick(category.id, categories.indexOf(category) + 1)}
//             >
//               {category.name}
//             </Menu.Item>
//           )}
//         </React.Fragment>
//       );
//     });
//   };

//   return (
//     <section className='categories-section'>
//       <h3>Filter Categories</h3>
//       <div className='categories_container'>
//         <ul
//           onClick={() => {
//             handleCategoryClick && handleCategoryClick(null, null);
//           }}
//         >
//           <li>All</li>
//         </ul>
//         <div>
//           <Menu mode="inline" inlineIndent={10} >
//             {renderMenu(catData)}
//           </Menu>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default CategoriesSection;