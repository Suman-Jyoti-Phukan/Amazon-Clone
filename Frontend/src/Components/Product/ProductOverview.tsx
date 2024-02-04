import { IQueryObject } from "../../Types/ProductTypes";

function ProductOverview({ queryObj }: IQueryObject) {
  const { data } = queryObj;

  return (
    <div className="grid grid-cols-3 mt-4 border-b border-textNavLight">
      <div className="">
        <ul>
          <li>
            <strong> Brand </strong>
          </li>
          <li>
            <strong> Model Name </strong>
          </li>
          <li>
            <strong> Cellular Technology</strong>
          </li>
          <li>
            <strong> OS</strong>
          </li>
          <li>
            <strong> Network Service Provider </strong>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>{data.productDetail.Brand}</li>
          <li>{data.productDetail.modelName}</li>
          <li>{data.productDetail.cellularTechnology}</li>
          <li>{data.productDetail.OS}</li>
          <li>Unlocked For All Devices</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductOverview;
