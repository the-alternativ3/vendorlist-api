import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";

import Vendor from "./Vendor/";

const resolvers = [User, Vendor];

export default mergeResolvers(resolvers);