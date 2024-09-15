import React, { memo, useCallback, useState } from "react";
import "../styles/Button.css";
import transitonsPage from "../components/transitonsPage";
import MenuItem from "../menu/MenuItem";
import CategroyBtn from "../menu/CategroyBtn";
import { projectData } from "../data";
import BaseContainerBox from "../components/BaseContainerBox";

function Project() {
  // Create a unique list of categories (including "all")
  const categoriesAll = [
    "All",
    ...new Set(projectData.map((item) => item.category)),
  ];

  const [menuItems, setMenuItems] = useState(projectData);
  const [categories, setCategories] = useState(categoriesAll);

  const filterItem = useCallback(
    (category) => {
      if (category == "All") {
        return setMenuItems(projectData);
      }

      const newFilter = projectData.filter(
        (item) => item.category === category
      );

      setMenuItems(newFilter);
    },
    [projectData]
  );
  return (
    <BaseContainerBox>
      <div className=" flex  justify-center  min-w-64 mb-6 flex-wrap items-center px-5  ">
        <CategroyBtn categories={categories} filterItem={filterItem} />
      </div>
      
      <div className="background-gradient-color    ">
        <MenuItem menuItems={menuItems} />
      </div>
    </BaseContainerBox>
  );
}

export default transitonsPage(Project);
