import React, { useState, useEffect, Fragment } from 'react';

import './candidate-form.scss';

function useFormik({
  initialValues,
  validate
}) {
  const [touched, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    validateValues(values);
  }, [values]);

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    const { value } = event.target;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  function handleBlur(event) {
    const fieldName = event.target.getAttribute('name');
    console.log(fieldName);
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    })
  }

  function validateValues(values) {
    setErrors(validate(values));
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
  };
}

function CandidateForm() {
  const formik = useFormik({
    initialValues: {
      userFullName: '',
      userEmail: '',
      userPhone1: '',
      userPhone2: ''
    },
    validate: function (values) {
      const errors = {};

      if (values.userFullName.length < 5) {
        errors.userFullName = 'Insira seu nome completo';
      }

      if (!values.userEmail.includes('@')) {
        errors.userEmail = 'Insira um endereço de email válido';
      }

      if (values.userPhone1.length !== 11) {
        errors.userPhone1 = 'Insira um número de telefone válido';
      }

      if (values.userPhone2.length !== 11) {
        errors.userPhone2 = 'Insira um número de telefone válido';
      }

      return errors;
    }
  });

  return (
    <Fragment>
      <section className="candidate">
        <section className="candidate-form">
          <form 
            onSubmit={(event) => {
              event.preventDefault();
              alert('Candidatura enviada com sucesso!');
            }}
          >

          <div className="candidate-form_item">
            <h2>Venha trabalhar na Docket</h2>
            <h4>Preencha o formulário abaixo e venha trabalhar em uma das startups mais desejadas do Brasil!</h4>
          </div>

          <div className="candidate-form_item">
            <h2>Dados pessoais</h2>
          </div>

          <div className="candidate-form_item">
            <label htmlFor="userFullName">
              <p>*&nbsp;</p>
              Nome completo:
            </label>
            <input
              type="text"
              required
              placeholder="Fulano de Tal"
              name="userFullName"
              id="userFullName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.userFullName}
            />
            {formik.touched.userFullName && formik.errors.userFullName && <span className="candidate-form_error">{formik.errors.userFullName}</span>}
          </div>

          <div className="candidate-form_item">
            <label htmlFor="userEmail">
              <p>*&nbsp;</p>
              E-mail:
            </label>
            <input
              type="text"
              placeholder="email@example.com"
              name="userEmail"
              id="userEmail"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.userEmail}
            />
            {formik.touched.userEmail && formik.errors.userEmail && <span className="candidate-form_error">{formik.errors.userEmail}</span>}
          </div>

          <div className="candidate-form_flex">
            <div className="candidate-form_item candidate-form_margin">
              <label htmlFor="userPhone1">
                <p>*&nbsp;</p>
                Telefone 1:
              </label>
              <input
                type="text"
                placeholder="(99) 9.9999-9999"
                name="userPhone1"
                id="userPhone1"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.userPhone1}
              />
              {formik.touched.userPhone1 && formik.errors.userPhone1 && <span className="candidate-form_error">{formik.errors.userPhone1}</span>}
            </div>

            <div className="candidate-form_item">
              <label htmlFor="userPhone2">
                Telefone 2:
              </label>
              <input
                type="text"
                placeholder="(99) 9.9999-9999"
                name="userPhone2"
                id="userPhone2"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.userPhone2}
              />
              {formik.touched.userPhone2 && formik.errors.userPhone2 && <span className="candidate-form_error">{formik.errors.userPhone2}</span>}
            </div>
          </div>

          <div className="candidate-form_item">
            <button type="submit" className="btn-submit">
              Enviar
            </button>
          </div>
          </form>
        </section>

        <section className="candidate-info">
          <div className="candidate-info_item">
            <h2>Ficha do candidato</h2>
          </div>

          <div className="candidate-info_item">
            <label htmlFor="fullName">Nome completo:</label>
            <input type="text" value={formik.values.userFullName} />
          </div>

          <div className="candidate-info_item">
            <label htmlFor="email">E-mail:</label>
            <input type="text" value={formik.values.userEmail} />
          </div>
          
          <div className="candidate-info_item">
            <label htmlFor="number">Telefone 1:</label>
            <input type="text" value={formik.values.userPhone1} />
          </div>

          <div className="candidate-info_item">
            <label htmlFor="number">Telefone 2:</label>
            <input type="text" value={formik.values.userPhone2} />
          </div>

          <div className="candidate-info_item">
            <h4>Seus projetos:</h4>

            <div className="candidate-info_projects">
              <div>
                <img src="https://picsum.photos/id/0/5616/3744" alt="" width="175" height="120"/>
              </div>
              <div>
                <img src="https://picsum.photos/id/1/5616/3744" alt="" width="175" height="120"/>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Fragment >
  );
}

export default CandidateForm;