import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {" "}
      <div className="relative z-0 mb-6 w-full group">
        <input
          type={props.type}
          {...field}
          className={
            meta.touched && meta.error
              ? "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-300 appearance-none dark:text-white dark:border-red-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600  peer input"
              : "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer input"
          }
          placeholder=" "
          autoComplete="off"
        />
        <label
          htmlFor="floating_email"
          className={
            meta.touched && meta.error
              ? "peer-focus:font-medium absolute text-sm text-red-500 dark:text-red-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 label"
              : "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 label"
          }
        >
          {label}
        </label>
        {meta.touched && meta.error ? (
          <div className="error text-red-500 text-sm mt-1">
            <i className="fa-solid fa-circle-exclamation mr-1"></i>
            {meta.error}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default TextInput;
