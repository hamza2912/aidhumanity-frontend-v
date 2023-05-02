import './switch.css';

const Switch = ({ type, onChange, value, name }) => {
  if (type !== 'dashboard') {
    return (
      <label class="switch">
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          name={name}
        />
        <span class="slider round"></span>
      </label>
    );
  } else {
    return (
      <label class="switch2">
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          name={name}
        />
        <span class="slider2 round2"></span>
      </label>
    );
  }
};

export default Switch;
