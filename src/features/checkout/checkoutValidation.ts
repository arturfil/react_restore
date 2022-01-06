import * as yup from 'yup';

export const validationSchema = [
  yup.object({
    fullName: yup.string().required("Full name is required"),
    address1: yup.string().required("Adress line is required"),
    address2: yup.string().required("Adress 2 line is required"),
    city: yup.string().required("City line is required"),
    state: yup.string().required("State line is required"),
    zip: yup.string().required("Zip line is required"),
    country: yup.string().required("Country line is required")
  }),
  yup.object(),
  yup.object({
    nameOnCard: yup.string().required()
  })
]
