import React from "react";
import DropdownBase, { DropDownProps as IProps } from "antd/lib/dropdown";

const Dropdown: React.FC<IProps> = ({ children, ...props }) => (
  <DropdownBase {...props} destroyPopupOnHide className="cursor-pointer">
    <div className="bg-blue-500 text-black font-bold cursor-pointer">{children}</div>
  </DropdownBase>
);

export default Dropdown;
