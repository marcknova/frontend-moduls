import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log({ field, meta });
  return (
    <div className="control">
      <input
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer input"
        placeholder=" "
        required=""
        {...field}
      />
      <label
        htmlFor="floating_email"
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 label"
      >
        {label}
      </label>
      {meta.touched && meta.error ? (
        <div className="error text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
