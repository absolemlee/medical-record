import mongoose from "mongoose";

export interface Pets extends mongoose.Document {
  name: string
  species: string
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const PetSchema = new mongoose.Schema<Pets>({
  name: {
    type: String,
    required: [true, 'Please provide a name for this pet.'],
  },
  species: {
    type: String,
    required: [true, 'Please specify the species of your pet.'],
  }
})

export default mongoose.models.Pet || mongoose.model<Pets>("Pet", PetSchema)