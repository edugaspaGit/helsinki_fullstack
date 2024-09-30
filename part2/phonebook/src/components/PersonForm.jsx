const Input = ({ text, value, onChange }) => {
  return (
    <div>
      {text}
      <input value={value} onChange={onChange} />
    </div>
  );
};
const Button = ({ text, type }) => {
  return (
    <div>
      <button type={type}>{text}</button>
    </div>
  );
};

const PersonForm = ({ onSubmit, input1, input2, button1 }) => {
  return (
    <form onSubmit={onSubmit}>
      <Input
        text={input1.text}
        value={input1.value}
        onChange={input1.onChange}
      />
      <Input
        text={input2.text}
        value={input2.value}
        onChange={input2.onChange}
      />
      <Button text={button1.text} type={button1.type} />
    </form>
  );
};
export default PersonForm;
