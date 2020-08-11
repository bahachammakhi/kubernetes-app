import React from 'react';

import formCreator from '../utils/formCreator';

const useFormCreator = ({ forms, handleChange, handleSelect }: any) => {
  const renderForms = forms.map((el: any, index: any) => {
    el.elementType === 'select' ? (el.onChange = handleSelect) : (el.onChange = handleChange);
    const formrender = formCreator(el);
    return formrender;
  });

  return { renderForms };
};

export default useFormCreator;
