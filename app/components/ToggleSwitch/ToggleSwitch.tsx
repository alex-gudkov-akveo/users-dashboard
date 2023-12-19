'use client';
import { useState, FC, memo } from 'react';
import style from './style.module.scss';

type ToggleSwitchProps = {
  label: string;
  onToggle: (checked: false) => void;
};

const ToggleSwitch: FC<ToggleSwitchProps> = ({ label, onToggle }) => {
  const [checked, setChecked] = useState(false);

  const toggle = (event: any) => {
    const { checked } = event.target;
    setChecked(checked);
    onToggle(checked);
  };

  return (
    <div className={style.container}>
      <div className={style.toggleSwitch}>
        <input
          type="checkbox"
          className={style.checkbox}
          name={label}
          id={label}
          onChange={toggle}
          checked={checked}
        />
        <label className={style.label} htmlFor={label}>
          <span className={style.inner} />
          <span className={style.switch} />
        </label>
      </div>
    </div>
  );
};

export default memo(ToggleSwitch);
