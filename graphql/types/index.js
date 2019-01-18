import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/";
import Vendor from "./Vendor/";

const typeDefs = [User, Vendor];

export default mergeTypes(typeDefs, { all: true });