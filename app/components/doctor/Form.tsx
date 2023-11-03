'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface FormData {
  name: string
  species: string
}

interface Error {
  name?: string
  species?: string
}

type Props = {
  formId: string
  petForm: FormData
  forNewPet?: boolean
}

const Form = ({ formId, petForm, forNewPet = true }: Props) => {
  const router = useRouter()
  const contentType = 'application/json'

  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')
  const [form, setForm] = useState({
    name: petForm.name,
    species: petForm.species
  })

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form: FormData) => {
    try {
      const res = await fetch('/api/doctor', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType
        },
        body: JSON.stringify(form)
      })

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status.toString())
      }
      router.push('/')

    } catch (error) {
      setMessage('Failed to add pet')
    }
  }


  // handlechange
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target
    const value =
      target.name === 'poddy_trained'
        ? (target as HTMLInputElement).checked
        : target.value

    const name = target.name

    setForm({
      ...form,
      [name]: value
    })
  }

  /* Makes sure pet info is filled for pet name, species*/
  const formValidate = () => {
    let err: Error = {}
    if (!form.name) err.name = 'Name is required'
    if (!form.species) err.name = 'Species is required'
    return err
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const errs = formValidate()
    setErrors({ errs })
  }

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          maxLength={20}
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="species">Species</label>
        <input
          type="text"
          maxLength={30}
          name="species"
          value={form.species}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>heheheheheh{err}</li>
        ))}
      </div>
    </>
  )
}

export default Form