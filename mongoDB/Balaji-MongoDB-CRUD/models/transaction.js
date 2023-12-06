const {Schema,model} = require("mongoose");

const userSchema = new Schema(
  {
    transaction_id: {
      type: String,
      unique: true,
      trim: true,
    },
    customer_id: {
      type: String,
      unique: true,
      trim: true,
    },
    transaction_date: {
      type: String,
      trim: true,
    },
    amount: {
      type: Number,
      trim: true,
    },
    status: {
        type: String,
        trim: true,
      },
    payment_method: {
        type: String,
        trim: true,
      },
    currency: {
        type: String,
        trim: true,
      },
  },
);

const TransactionModel = model("transaction_details", userSchema);

module.exports = TransactionModel;