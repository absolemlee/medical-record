import Form from "./Form"

const NewPet = () => {
  const petForm = {
    name: '',
    species: '',
  }

  return <Form formId="add-pet-form" petForm={petForm}/>
}

export default NewPet