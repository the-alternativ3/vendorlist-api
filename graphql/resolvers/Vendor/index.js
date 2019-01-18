// The Vendor schema.
import Vendor from "../../../models/Vendor";

export default {
  Query: {
    vendor: (root, args) => {
      return new Promise((resolve, reject) => {
        Vendor.findOne(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    vendors: () => {
      return new Promise((resolve, reject) => {
        Vendor.find({})
          .populate()
          .exec((err, res) => {
            err ? reject(err) : resolve(res);
          });
      });
    }
  },
  Mutation: {
    addVendor: (
      root,
      {
        name,
        twitter,
        instagram,
        address,
        productOfferings,
        yearFounded,
        rating
      }
    ) => {
      return new Promise(async (resolve, reject) => {
        //confirm vendor  with name doesnt already exist
        const existing = await Vendor.findOne({ name });

        if (existing) {
          return reject("This vendor already exists.");
        }

        const newVendor = new Vendor({
          name,
          twitter,
          instagram,
          address,
          productOfferings,
          yearFounded,
          rating
        });

        newVendor.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    editVendor: (
      root,
      {
        name,
        twitter,
        instagram,
        address,
        productOfferings,
        yearFounded,
        rating
      }
    ) => {
      return new Promise((resolve, reject) => {
        Vendor.findOneAndUpdate(
          { name },
          {
            $set: {
              twitter,
              instagram,
              address,
              productOfferings,
              yearFounded,
              rating
            }
          }
        ).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    deleteVendor: (root, args) => {
      return new Promise((resolve, reject) => {
        Vendor.findOneAndRemove(args).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
