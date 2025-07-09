import React, { MouseEventHandler } from "react";

import './SelectOptions.css'

import { IOption, OptionProps } from "@/shared/assets/types/types";

export const Option = (props: OptionProps) => {
  const {
    option: { value, title },
    onClick,
  } = props;

  const handleClick =
    (clickedValue: IOption['value']): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue);
    };

  return (
    <li
      className="option"
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
    >
      {title}
    </li>
  );
};