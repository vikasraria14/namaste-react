import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
  costForTwo
}) => {
  const {user} = useContext(UserContext)
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{sla.lastMileTravelString} </h4>
      <h4>{costForTwo}</h4>
      <h4>{user}</h4>
    </div>
  );
};

export default RestrauntCard;
