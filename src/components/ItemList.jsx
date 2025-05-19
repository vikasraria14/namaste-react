import { IMG_CDN_URL } from "../constants";
const ItemList = ({ name, price, imageId, description, defaultPrice }) => {

  return (
    <div className=" m-1 flex justify-between border-b-2 p-1 shadow-sm">
      <div className="w-4/5">
        <h5 className="font-bold text-gray-600">
          {name} - Rs.{price / 100 || defaultPrice / 100}
        </h5>
        <p>{description}</p>
      </div>

      <img src={IMG_CDN_URL + imageId} className="w-1/5" />
    </div>
  );
};
export default ItemList;
