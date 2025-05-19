import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import MenuCategory from "./MenuCategory";
import { useState } from "react";
const Menu = () => {
  const { id } = useParams();
  const data = useRestaurant(id);
  const [showIndex, setShowIndex] = useState(0);
  if (data.length === 0) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
    data.cards[2].card.card.info;
  return (
    <div className="w-1/2 m-auto">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <h3>
        Rating - {avgRating}({totalRatingsString})
      </h3>
      <h1>Menu</h1>
      {data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.map(
        (menu, index) => {
          return (
            <MenuCategory
              key={index}
              menu={menu}
              index={index}
              showIndex={showIndex}
              setShowIndex = {setShowIndex}
            />
          );
        }
      )}
    </div>
  );
};
export default Menu;
