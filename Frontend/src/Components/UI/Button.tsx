import { ReactNode, MouseEvent } from "react";

/* Please note color doesnot stand for font color but for bg-color.
I will later change it. It is kind of messed up. But works fine */

interface IButtonStyle {
  paddingX?: string;
  paddingY?: string;
  size?: string;
  hoverBg?: string;
  margin?: string;
  width?: string;
  textColor?: string;
  color?: string;
  padding?: string;
  addStyle?: string;
}

interface IButton {
  customStyle?: IButtonStyle;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

function Button({
  customStyle = {},
  children,
  onClick,
  disabled = false,
}: IButton) {
  const {
    color = "bg-btnPrimary",
    paddingX = "px-[7rem]",
    paddingY = "py-[0.5rem]",
    size = "text-fontSizePrimary",
    hoverBg = "hover:bg-btnPrimaryDark",
    margin = "",
    padding = "",
    width = "",
    textColor = "text-black",
    addStyle,
  } = customStyle;

  const buttonStyles: IButtonStyle = {
    color,
    paddingX,
    paddingY,
    size,
    hoverBg,
    margin,
    padding,
    width,
    textColor,
    addStyle,
  };

  const disbableStyle = `  ${
    disabled ? "cursor-not-allowed" : buttonStyles.hoverBg
  }`;

  return (
    <button
      className={`block ${buttonStyles.color} ${buttonStyles.textColor} ${buttonStyles.paddingX} ${buttonStyles.paddingY}  ${buttonStyles.size} ${buttonStyles.hoverBg}  transition-all duration-300 ease-in-out  rounded-full  ${buttonStyles.margin}  ${buttonStyles.padding}  whitespace-nowrap  ${buttonStyles.width} ${buttonStyles.addStyle} ${disbableStyle} flex items-center justify-center di
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
