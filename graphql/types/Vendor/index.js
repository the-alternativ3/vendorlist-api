export default `
  type Vendor {
    name: String!
    twitter: String
    instagram: String
    address: String
    productOfferings: [String]
    yearFounded: String
    rating: Float
  }
  type Query {
    vendor(name: String!): Vendor
    vendors: [Vendor]
  }
  type Mutation {
    addVendor(name: String!, twitter: String, instagram: String, address: String, productOfferings: [String], yearFounded: String, rating: Float ): Vendor
    editVendor(name: String!, twitter: String, instagram: String, address: String, productOfferings: [String], yearFounded: String, rating: Float ): Vendor
    deleteVendor(name: String!): Vendor
  }
`;