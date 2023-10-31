import mongoose, {Schema} from "mongoose"

const doctorSchema = new Schema(
  {
    firstName: String
  },
  {
    timestamps: true
  }
)

const Doctor = mongoose.model("Doctor", doctorSchema)

export default Doctor