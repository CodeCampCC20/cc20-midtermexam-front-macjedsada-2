import * as Yup from 'yup'

export const schemaLogin = Yup.object({
  email: Yup.string().email().max(30).required("Email is required"),
  password: Yup.string().max(20).required("Password is required"),
})