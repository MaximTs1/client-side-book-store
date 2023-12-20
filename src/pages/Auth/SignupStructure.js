import Joi from "joi";

export const structure = [
  {
    name: "firstName",
    type: "text",
    label: "First name",
    required: true,
    block: false,
  },
  {
    name: "lastName",
    type: "text",
    label: "Last name",
    required: true,
    block: false,
  },
  {
    name: "phone",
    type: "number",
    label: "Phone Number",
    required: true,
    block: false,
  },
  {
    name: "email",
    type: "email",
    label: "email",
    required: true,
    block: false,
  },
  {
    name: "password",
    type: "password",
    label: "password",
    required: true,
    block: false,
  },
  { name: "city", type: "text", label: "city", required: true, block: false },
  {
    name: "street",
    type: "text",
    label: "Street Address",
    required: true,
    block: false,
  },
  {
    name: "houseNumber",
    type: "number",
    label: "House Number",
    required: true,
    block: false,
  },
  {
    name: "zip",
    type: "number",
    label: "Zip",
    required: true,
    block: false,
  },
];

export const pattern = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!#.])[A-Za-z\\d$@$!%*?&.]{8,20}"
);

export const signupSchema = Joi.object({
  firstName: Joi.string().min(3).max(50).required(),
  lastName: Joi.string().min(3).max(200).required(),
  phone: Joi.number()
    .integer()
    .custom((value, helpers) => {
      if (value.toString().length === 10) {
        return value;
      } else {
        return helpers.error("any.invalid");
      }
    })
    .required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().regex(pattern).required().min(8).max(20),
  email: Joi.string().email({ tlds: { allow: false } }),
  city: Joi.string().min(3).required(),
  street: Joi.string().min(3).required(),
  houseNumber: Joi.number().required(),
  zip: Joi.number().required(),
});
