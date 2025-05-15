import { useEffect, useState } from "react";
import { MENU_URL } from "../constants";
const useRestaurant = (id) => {
  const [restaurantData, setRestaurantData] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    let data = await fetch(MENU_URL + id);
    data = await data.json();

    setRestaurantData(data.data);
  };
  return restaurantData;
};
export default useRestaurant;
