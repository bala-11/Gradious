const transactions = require("../models/transaction");

exports.createTransaction = async (req, res) => {
    try {
      // get the task from the body
      const transactionData = await req.body;
      //create a new task then save
      await transactions.create(transactionData)
        .then((createdTransaction) => {
          if (!createdTransaction) return res.status(404)
            .json({
              success: false,
              message: "Transaction creation failed",
              error: "Unable get created transaction"
            })
          res.status(201)
            .json({
              message : "Transaction is created..." , transactionData
            });
        })
        .catch((error) => {
          res.status(404)
            .json({
              success: false,
              error: error.message
            })
        })
    } catch (error) {
      res.status(500)
        .json({
          success: false,
          message: "Internal server error"
        })
    }
  }


// get all data
  exports.getAllTransaction = async (req, res) => {
    //get all the data in the model and return it as response
    try {
       const allTransaction = await transactions.find();
       res.status(200).json(allTransaction);

    } catch (error) {
      res.status(500).json({message: "Internal server error",error: error.message})
    }
  }

  

// get specific transaction details
exports.getSpecificTransaction = async (req,res)=>{
    try {
      const id = req.params.id;
      const specificTransaction = await transactions.findById(id);
      if(specificTransaction === null) return res.status(404).send("Transaction not found...");
      res.status(200).json(specificTransaction);
    } catch (error) {
      res.status(404).send("Transaction not found...");
    }
};



// update a specific transaction
exports.updateTransaction = async (req,res) => {
  try {
    const id = req.params.id;
    const opt = {new:true};
    const updateData = await transactions.findByIdAndUpdate(id,req.body,opt);
    res.status(200).json({
      message  : "Transaction is updated..." , updateData
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({message:error});
  }
}

// Delete the specific transaction 
exports.deleteTransaction = async (req,res) =>{
  try {
    const id = req.params.id;
    await transactions.findByIdAndDelete(id);
    res.status(200).send("Transaction is deleted...");
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Internal server error");
  }
}
