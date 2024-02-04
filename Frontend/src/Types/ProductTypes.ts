export interface productDetail {
  Brand?: string;
  modelName: string;
  OS: string;
  cellularTechnology: string;
  caseDiameter?: string;
  brandColor?: string;
  brandMaterialType?: string;
  warrantytype?: string;
}

export interface IProduct {
  _id: string;
  productTitle: string;
  product: string;
  price: number;
  discount?: number;
  image?: string;
  productDetail: productDetail;
  productDesc: Array<string>;
  category: string;
}

export interface IQueryData {
  isLoading?: boolean;
  data: IProduct;
  isError?: boolean;
  title?: string;
}

export interface IQueryObject {
  queryObj: IQueryData;
}

export interface IQueryObjectArray {
  queryObj: IQueryData;
}

export interface CardContainerMobileProps {
  sortQueryFn: (filterData: string) => Array<IProduct>;
}

export interface ICard {
  data: Array<IProduct>;
  title: string;
}
