import Entity from "../models/product.model.js";

export default {
  create: async (req, res) => {
    try {
      const { _name, _amount, _price } = req.body;
      const entity = new Entity({
        _name,
        _amount,
        _price
      });

      const savedEntity = await entity.save();

      res.status(200).json(savedEntity);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  },

  read: async (req, res) => {
    const entities = await Entity.find();
    return res.json(entities);
  },

  addStock: async (req, res) => {
    const { _id, _addedAmount } = req.body;

    const _entity = await Entity.findById(_id)
    
    const _amount = _addedAmount + _entity._amount

    const _savedEntity = await Entity.findByIdAndUpdate(
      _id,
      { $set: { _amount } },
      { new: true }
    );
    res.status(200).json(_savedEntity);
  },
};

