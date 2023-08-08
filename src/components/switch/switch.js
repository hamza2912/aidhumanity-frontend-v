import './switch.css';

const Switch = ({ type, onChange, value, name }) => {
  if (type !== 'dashboard') {
    return (
      <label className="switch">
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          name={name}
        />
        <span className="slider round"></span>
      </label>
    );
  } else {
    return (
      <label className="switch2">
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
          name={name}
        />
        <span className="slider2 round2"></span>
      </label>
    );
  }
};

export default Switch;
