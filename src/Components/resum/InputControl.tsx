import styles from "../../styles/InputControl.module.css";

function InputControl({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2 mt-5">
      {label && <label>{label}</label>}
      <input
        className=" px-5 border py-3 outline-none border-gray-600"
        type="text"
        {...props}
      />
    </div>
  );
}

export default InputControl;
