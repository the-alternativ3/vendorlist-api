# VendorList API

This is an Express + GraphQL API for VendorList made using the tutorial here: https://medium.freecodecamp.org/how-to-set-up-a-graphql-server-using-node-js-express-mongodb-52421b73f474

## Use

- Clone the repo.
- Change the Mongo URL in `index.js` to your own local Mongo instance. e.g. `mongodb://opeo:dev@localhost/vendorlist`
- Run `npm install`
- Go to `localhost:4000` on your browser to view the playground.

## Example Queries + Mutations

```
query {
  vendors {
    name
    instagram
    twitter
    productOfferings
    address
    rating
  }
}

mutation {
  addVendor (name: "tosin and sons", instagram: "me", twitter: "me", productOfferings: ["bags", "shoes"], address: "shukpa street", rating: 5 ) {
    name
    instagram
    productOfferings
  }
}

mutation {
  editVendor (name: "tosin and sons", instagram: "me", twitter: "me", productOfferings: ["bags", "shoes"] ) {
    name
    instagram
    productOfferings
  }
}

mutation {
  deleteVendor (name: "tosin and sons") {
    name
    instagram
    productOfferings
  }
}
```

You can view the types in the `types` directory.

Also, if you're interested in contributing to the stuff we build at The Alternativ3, you can reach out to me on Twitter.

Happy coding!
