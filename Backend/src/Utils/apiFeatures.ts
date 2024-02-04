import { Query } from "mongoose";

interface QueryString {
  sort?: string;
  page?: string;
  field?: string;
  limit?: string | number;
}

export default class APIFeatures {
  query: Query<Document[], Document>;
  queryString: QueryString;
  constructor(query: any, queryString: QueryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj: QueryString = { ...this.queryString };

    const excludedFields = ["page", "sort", "limit", "field"];

    excludedFields.forEach((el: string) => delete (queryObj as any)[el]);

    let queryStr = JSON.stringify(queryObj);

    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    // For Embedded Docs
    const regex = /\b(embeddedField\.[a-zA-Z0-9._-]+)\b/g;

    queryStr = queryStr.replace(regex, (match) => match.replace(".", "."));

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("createdAt");
    }
    return this;
  }

  limitField() {
    if (this.queryString.field) {
      const field = this.queryString.field.split(",").join(" ");
      this.query.select(field);
    } else {
      this.query = this.query.select("-__v");
    }

    return this;
  }

  paginate() {
    const page = Number(this.queryString.page) || 1;
    const limit = Number(this.queryString.limit) || 100;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}
