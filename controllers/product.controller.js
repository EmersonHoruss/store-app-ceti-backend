import { ProductModel } from "../models/product.model.js";

export default {
  create: async (req, res) => {
    try {
      const { _name, _amount, _price } = req.body;

      const _savedProduct = await ProductModel.create(_name, _amount, _price)

      res.json(_savedProduct);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  get: async (req, res) => {
    try {
      const _products = await ProductModel.get()
      return res.json(_products);
    } catch (error) {
      return res.status(500).json(error)
    }
  },

  addStock: async (req, res) => {
    try {
      const { _id, _addedAmount } = req.body;

      const _savedProduct = await ProductModel.addStock(_id, _addedAmount);

      res.json(_savedProduct);
    } catch (error) {
      res.status(500).json(error)
    }
  },

  update: async (req, res) => {
    try {
      const { _id, _name, _price } = req.body;
      
      const _savedProduct = await ProductModel.update(_id, _name, _price)

      res.json(_savedProduct)
    } catch (error) {
      res.status(500).json(error)
    }
  }
};