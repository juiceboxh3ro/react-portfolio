import React from 'react';
import { ContactWrap, ErrorP, SubmitButton } from './styles';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ContactCard = ({ errors, touched, values }) => {
  return (
    <ContactWrap>
      <Form>
        <div class="pseudo-label">
          <Field required id="name" type="text" name="name" />
          <label className="name-label" htmlFor="name">
            <span className="content-label">Name</span>
          </label>
        </div>
        {touched.name && errors.name && (<ErrorP className="error">{errors.name}</ErrorP>)}

        <div class="pseudo-label">
          <Field required id="email" type="email" name="email" />
          <label className="name-label" htmlFor="email">
            <span className="content-label">Email Address</span>
          </label>
        </div>
        {touched.email && errors.email && (<ErrorP className="error">{errors.email}</ErrorP>)}

        <div class="pseudo-label">
          <Field autoComplete="off" id="message" component="textarea" type="text" name="message" />
          <label className="name-label" htmlFor="message">
            <span className="content-label">Message</span>
          </label>
        </div>
        {touched.message && errors.message && (<ErrorP className="error">{errors.message}</ErrorP>)}

        <SubmitButton type="submit">Send it!</SubmitButton>
      </Form>
    </ContactWrap>
  )
}

const FormikContakt = withFormik({
  mapPropsToValues(values) {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('I need to know who this message is from!'),
    email: Yup.string().required('I need to be able to reply to you!'),
    message: Yup.string().required("I can't reply to nothing!")
  }),
  handleSubmit(values, { resetForm }) {
    console.log('Message sending', values);
    resetForm();
  }
})(ContactCard)

export default FormikContakt;