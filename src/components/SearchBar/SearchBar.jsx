import { Field, Form, Formik } from "formik";
import s from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onChangeQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    if (!values.query.trim()) {
      toast("Please enter some text!");
      return;
    }
    onChangeQuery(values.query);
  };

  return (
    <div>
      <Toaster
        toastOptions={{
          style: {
            background: "black",
            color: "#fff",
          },
        }}
      />
      <Formik
        className={s.header}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <Field
            name="query"
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={s.btn}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
