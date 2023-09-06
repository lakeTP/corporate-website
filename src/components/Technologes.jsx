import React from "react";
import s from "./Technologes.module.css";

import { BiLogoJavascript } from "react-icons/bi";
import { ImHtmlFive } from "react-icons/im";
import { BiSolidFileCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFiletypeScss } from "react-icons/bs";
import { TbBrandRedux } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

const Technologes = () => {
	return (
		<div className={s.wrapper}>
			<BiLogoJavascript size={50} />
			<BiLogoTypescript size={50} />
			<FaNodeJs size={45} />
			<FaReact size={45} />
			<TbBrandNextjs size={45} />
			<TbBrandRedux size={45} />
			<ImHtmlFive size={40} />
			<BiSolidFileCss size={45} />
		</div>
	);
};

export default Technologes;
