import * as Yup from "yup";

const schema = Yup.object().shape({
  date: Yup.date().nullable().required("Required!"),
  name: Yup.string()
    .min(4, "Name at least 4 character required!")
    .required("Required!"),
  interviewer: Yup.string().required("Required!"),
  technology: Yup.string().required("Required!"),
  experience: Yup.number()

    .typeError("Only Digit!")
    .required("Required!"),
  round: Yup.string().optional().required("Required!"),
  practical: Yup.string()
    .required("Required")
    .when(["round"], (round, schema) => {}),
  // practical: Yup.string().required("Required!"),

  communication: Yup.string().required("Required!"),
  coding: Yup.string().required("Required!"),
  technical: Yup.string().required("Required!"),
  notes: Yup.string().required("Required!"),
});

export default schema;
