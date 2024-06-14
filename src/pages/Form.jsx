import { useCallback } from 'react';
import useForm from '../hooks/useForm';

const Form = () => {
  const [formData, setFormValue, resetFormValues] = useForm({
    username: 'aic',
    email: 'qq',
  });

  const handleUsernameChange = useCallback(
    (event) => {
      setFormValue('username', event.target.value);
    },
    [setFormValue]
  );

  const handleEmailChange = useCallback(
    (event) => {
      setFormValue('email', event.target.value);
    },
    [setFormValue]
  );
  return (
    <form>
      <div className="form-group">
        <label htmlFor="">用户名</label>
        <input
          type="text"
          className="form-control"
          placeholder="用户名"
          value={formData.username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">邮箱</label>
        <input
          type="text"
          className="form-control"
          placeholder="邮箱"
          value={formData.email}
          onChange={handleEmailChange}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => console.log(formData)}
      >
        submit
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => resetFormValues()}
      >
        reset
      </button>
    </form>
  );
};

export default Form;
