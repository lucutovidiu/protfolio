import React from "react";
import {useSelector} from "react-redux";
import {checkIfisAuthorized} from "../HelperFunctions";

function useAuth() {
	const authSelector = useSelector(state => state);
	const [state, setstate] = React.useState({
		isAuthorized: {checkingInProgress: true, checkResult: "NOT_CHECKED"}
	});

	// console.log(authSelector);
	function checkAuth() {
		const auth = {...authSelector};
		if (auth.jwt !== "") {
			checkIfisAuthorized(auth.jwt).then(data => {
				const {isAuthorized} = JSON.parse(data);
				if (isAuthorized.userEmail) {
					// console.log(auth);
					setstate({
						isAuthorized: {
							checkingInProgress: false,
							checkResult: "FOUND",
							role: auth.role,
							jwt: auth.jwt
						}
					});
				} else {
					setstate({
						isAuthorized: {
							checkingInProgress: false,
							checkResult: "NOT_FOUND"
						}
					});
				}
			});
		} else {
			if (authSelector.jwt !== "")
				setstate({
					isAuthorized: {checkingInProgress: false, checkResult: "NOT_FOUND"}
				});
		}
	}

	if (state.isAuthorized.checkingInProgress) {
		checkAuth();
	}

	return state;
}

export default useAuth;
