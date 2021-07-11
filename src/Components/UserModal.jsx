import React, { useContext, useState } from "react";
// Style Import
import scss from "./user-modal.module.scss";
import Register from "./Subcomponents/Register";
import Login from "./Subcomponents/Login";
// Context
import { appContext } from "../Context/Context";

export default function UserModal() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [tab, setTab] = useState("login");
	const { setShow } = useContext(appContext);
	return (
		<div className={scss["container"]}>
			<div className={scss["modal"]}>
				<div className={scss["modalHeader"]}>
					<p className={scss["modalOption"]} onClick={() => setTab("register")}>
						register
					</p>
					<p>/</p>
					<p className={scss["modalOption"]} onClick={() => setTab("login")}>
						login
					</p>
					<input
						className={scss["closeBtn"]}
						type="button"
						onClick={() => {
							setShow(false);
						}}
						value="X"
						id="buttonInput"
					/>
				</div>
				{tab === "login" ? <Login /> : tab === "register" ? <Register /> : null}
			</div>
		</div>
	);
}
