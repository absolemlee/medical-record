'use client'
import React from 'react'
import styles from "../login/login.module.css"
import { Box, Container, Typography }
  from '@mui/material'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'

import { useForm, Resolver } from "react-hook-form"
import Link from 'next/link'

type FormValues = {
  email: string
  password: string
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = handleSubmit((data) => console.log('henlo', data))

  return (
    <Container style={{ padding: '0 350px' }}>
      <form onSubmit={onSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            required
            label="Email"
            placeholder='Enter your email'
            sx={{ mb: 2.5 }}
            size="small"
            type="email"
            {...register("email")}
          />
          <TextField
            required
            label="Password"
            type="password"
            placeholder='Set your password'
            sx={{ marginBottom: '10px' }}
            size="small"
            {...register("password")}
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
            />
          </FormGroup>
          <Button type="submit" variant="contained" sx={{ margin: "30px 100px 20px" }}>
            <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
              Sign in
            </Typography>
          </Button>
        </Box>
      </form>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body2">
          <Link href="/reset-password" className={styles.loginLink}>
            Forgot Password?
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ color: 'gray' }}>
          Need an email account?
          <Link href="/create-account" className={styles.loginLink} style={{ marginLeft: '5px' }}>
            Create account
          </Link>
        </Typography>
      </Box>
    </Container>
  )
}

export default LoginForm

// const resolver: Resolver<FormValues> = async (values) => {
//   return {
//     values: values.email ? values : {},
//     errors: !values.email
//       ? {
//         email: {
//           type: 'required',
//           message: 'Email is required'
//         }
//       }
//       : {}
//   }
// }

/*
<input {...register("email")} placeholder="Jane" />
{errors?.email && <p>{errors.email.message}</p>}
<input type="submit" />
*/