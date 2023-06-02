const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ["waiting", "approved", "rejected"],
    default: "waiting",
  },
  subCategory:[
    {
        type:Schema.Types.ObjectId,
        ref:'Subcategory'
    }
  ],
  created: {
    type: Date,
    default:Date.now(),
  },
  update: {
    type: Date,
  },
});

module.exports = mongoose.model("Category", categorySchema);
