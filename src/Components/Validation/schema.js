import * as Yup from "yup";

const schema = Yup.object().shape({
  date: Yup.date().nullable().required("Date is Required!"),
  name: Yup.string()
    .min(4, "Name at least 4 character required!")
    .required("Name Required!"),
  interviewer: Yup.string().required("Select At One"),
  technology: Yup.string().required("Select At One"),
  round: Yup.string().required("Select At One"),
  communication: Yup.string().required("Select At One"),
  experience: Yup.string().required("Experience Required!"),
  practical: Yup.string().required("Practical Completion Required!"),
  coding: Yup.string().required("Coding Standard Required!"),
  technical: Yup.string().required("Technical Completion Required!"),
  notes: Yup.string().required("Notes Required!"),
});

export default schema;
