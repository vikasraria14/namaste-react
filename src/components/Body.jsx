// import { restaurantList } from "../constants";
import RestrauntCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const filterRestaurants = (restaurants, searchText) => {
    return restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);
  const fetchRestaurants = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    data = await data.json();
    console.log(
      "data",
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setRestaurants(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="search-container">
        <input
          placeholder="Search Restaurants ..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            const data = filterRestaurants(restaurants, e.target.value);
            // console.log(data);
            setFilteredRestaurants(data);
          }}
        />

        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestrauntCard {...restaurant.info} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
