import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div>
      <p className={s.textError}>Reload the page!..</p>
    </div>
  );
};

export default ErrorMessage;
