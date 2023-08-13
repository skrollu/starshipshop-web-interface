import React from "react";
import "./button.sass";

type Props = {
	text: string;
};

function Button({ text }: Props) {
	return <button>{text}</button>;
}

export default Button;
