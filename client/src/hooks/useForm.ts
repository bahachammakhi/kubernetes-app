import { useState } from 'react';

interface Props {
  handleSubmitCallback?: void;
  validateCallback?: void;
  initialValues?: any;
}

const useForm = ({ handleSubmitCallback, validateCallback, initialValues }: any) => {
  const [form, setForm] = useState(initialValues);
  const [selectform, setSelectform] = useState('fdsf'); //for holding initial form data
  const [errors, setErrors] = useState({}); //for validtion errors
  const [success, setSuccess] = useState(false); //set to true if form was submitted successfully
  const [submitting, setSubmitting] = useState(false); //set to true when first submitting the form to disable the submit button
  //below is a function that creates a touched variable from hte initial values of a form, setting all fields to false (not touched)
  const setInitialTouched = (form: any) => {
    const touchedInitial: any = {};
    //if the initial values aren't populated than return an empty object.
    if (!form) return {};
    //create a new object using the keys of the form object setting alll values to false.
    Object.keys(form).forEach(value => {
      touchedInitial[value] = false;
    });
    return touchedInitial;
  };
  const [touched, setTouched] = useState(setInitialTouched(form));
  const validate = () => {
    let e = validateCallback();
    setErrors(e);
    return e;
  };
  const handleSelect = (value: any) => {
    setSelectform(value);
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target; //use destructuring ot get name/value from target for ease of use
    setForm((state: any) => {
      //here we use the spread operator to return the object. This puts the properties of
      //state into a new object and then adds on the newly created value.
      //since properties on the right side  of a spread operation always "win", the new value will be returned with the new objecgt.
      return { ...state, [name]: value };
    });
  };
  const handleBlur = (e: any) => {
    const { name } = e.target;
    setTouched((c: any) => {
      return { ...c, [name]: true };
    });
    validate();
  };
  const handleSubmit = async () => {
    setSubmitting(true);
    //set all fields to touched
    const touchedTrue: any = {};
    Object.keys(form).forEach(value => {
      touchedTrue[value] = true;
    });
    setTouched(touchedTrue);
    // e.preventDefault();
    const err = validate();

    if (Object.keys(err).length === 0) {
      //if there are no errors, set submitting=false and submit form.
      //I am setting submit to false before calling handleSubmitCallback because in my calling component I am performing a redirect with react-router and if I wait until
      //after I get a warning about trying to set state on an unmounted component.
      setSubmitting(false);
      console.log('no errors.');
      setSuccess(await handleSubmitCallback());
    } else {
      setSubmitting(false);
      setSuccess(false);
    }
  };
  const handleReset = () => setForm({});
  return {
    handleChange,
    handleBlur,
    handleSubmit,
    setForm,
    handleReset,
    handleSelect,
    selectform,
    form,
    errors,
    touched,
    submitting,
    success,
  };
};
export default useForm;
