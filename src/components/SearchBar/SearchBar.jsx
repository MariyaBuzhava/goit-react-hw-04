// import c from './SearchBar.module.css'

import { Field, Form, Formik } from "formik";

const SearchBar = ({ onSubmit }) => {
  const initaialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    onSubmit(values.query);
  };
  return (
    <div>
      <Formik initialValues={initaialValues} onSubmit={handleSubmit}>
        <Form>
          <Field
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
