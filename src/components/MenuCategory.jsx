import { useState } from "react";
import ItemList from "./ItemList";
const MenuCategory = ({ menu, showIndex, index, setShowIndex }) => {
  const { title, itemCards } = menu?.card?.card;
  //   const [buttonIcon, setButtonIcon] = useState("⬇️");
  const buttonIcon = showIndex !== index ? "⬇️" : "🔼";
  const handleClick = () => {
    console.log("HELLO", showIndex === index);
    if (showIndex === index) {
      console.log("HE");
      setShowIndex(-1);
    } else {
      setShowIndex(index);
    }
    // setButtonIcon(showIndex !== index ? "⬇️" : "🔼");
  };
  if (!itemCards) return <div></div>;
  console.log("SHOW INDEX", showIndex, index);
  return (
    <div>
      <div
        className="font-bold text-xl bg-gray-200 px-2 py-1 flex justify-between cursor-pointer my-1 shadow-md"
        onClick={handleClick}
      >
        <h2>
          {title} ({itemCards?.length}){" "}
        </h2>
        <span>{buttonIcon}</span>
      </div>
      <div className="px-2 bg-gray-100">
        {showIndex === index &&
          itemCards?.map((item) => {
            return <ItemList {...item.card.info} key={item.card.info.name} />;
          })}
      </div>
    </div>
  );
};

export default MenuCategory;
