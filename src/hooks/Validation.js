const validate = (values) => {
  const errors = {};
  let isValidphone = new RegExp(/^\+91\d{10}$/);
  let isValidEmail = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (!values.name) {
    errors.name = "Nombre es requerido";
  } else if (values.name.length < 4) {
    errors.name = "El Nombre es demasiado corto";
  }
  if (!values.lastName) {
    errors.lastName = "El Apellido es requerido";
  } else if (values.lastName.length < 4) {
    errors.lastName = "El Apellido es demasiado corto";
  }
  if (!values.phone) {
    errors.phone = "El Celular es Requerido";
  } else if (!isValidphone.test(values.phone)) {
    errors.phone = "El Formato de telefono no es valido";
  }
  if (!values.email) {
    errors.email = "El Correo es requerido";
  } else if (!isValidEmail.test(values.email)) {
    errors.email = "Agregue un correo valido";
  }
  if (!values.department) {
    errors.department = "El Departamento es requerido";
  } else if (values.department.length < 4) {
    errors.department = "El Departamento es demasiado corto";
  }
  if (!values.job) {
    errors.job = "El Puesto es requerido";
  } else if (values.job.length < 4) {
    errors.job = "El Puesto es demasiado corto";
  }
  if (!values.extension) {
    errors.extension = "La Extension es requerida";
  } else if (values.extension.length < 2) {
    errors.extension = "La Extension es demasiado corta";
  }
  return errors;
};

export default validate;
