const validate = (values) => {
  const errors = {};
  // let isValidphone = new RegExp(/^\+91\d{10}$/);
  let isValidEmail = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  if (!values.nombre) {
    errors.nombre = "Nombre es requerido";
  } else if (values.nombre.length < 4) {
    errors.nombre = "El Nombre es demasiado corto";
  }
  if (!values.apellido) {
    errors.apellido = "El Apellido es requerido";
  } else if (values.apellido.length < 4) {
    errors.apellido = "El Apellido es demasiado corto";
  }
  // if (!values.phone) {
  //   errors.phone = "El Celular es Requerido";
  // } else if (!isValidphone.test(values.phone)) {
  //   errors.phone = "El Formato de telefono no es valido";
  // }
  if (!values.correo) {
    errors.correo = "El Correo es requerido";
  } else if (!isValidEmail.test(values.correo)) {
    errors.correo = "Agregue un correo valido";
  }
  if (!values.departamento) {
    errors.departamento = "El Departamento es requerido";
  } else if (values.departamento.length < 4) {
    errors.departamento = "El Departamento es demasiado corto";
  }
  if (!values.puesto) {
    errors.puesto = "El Puesto es requerido";
  } else if (values.puesto.length < 4) {
    errors.puesto = "El Puesto es demasiado corto";
  }
  if (!values.extension) {
    errors.extension = "La Extension es requerida";
  } else if (values.extension.length < 2) {
    errors.extension = "La Extension es demasiado corta";
  }
  return errors;
};

export default validate;
