import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const Menu = () => {
  const { id } = useParams();
  const data = useRestaurant(id);

  if (data.length === 0) return <Shimmer />;
  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
    data.cards[2].card.card.info;
  return (
    <>
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
          const { title, itemCards } = menu?.card?.card;
          if (!itemCards) return <div key={index}></div>;
          return (
            <div key={index}>
              <h2>{title} </h2>
              {itemCards?.map((item) => {
                const { name, price } = item.card.info;
                return (
                  <h5 key={name}>
                    {name} - Rs.{price / 100}
                  </h5>
                );
              })}
            </div>
          );
        }
      )}
    </>
  );
};
export default Menu;
