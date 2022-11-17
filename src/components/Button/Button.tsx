import React, {FC} from "react";

export type ButtonProps = {
  label: string
}
const Button:FC<ButtonProps> = ({label}) => {
  return <button style={{backgroundColor: "red"}}>{label}</button>
}

export default Button
