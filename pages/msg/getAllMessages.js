import React from "react";
import {DeleteMsgByID, GetAllMessages} from "../../components/HelperFunctions";
import {Table} from "react-bootstrap";
import moment from "moment";

const getAllMessages = () => {
	const [msg, setMsg] = React.useState({
		visitors: [],
		emails: [],
		hasDeleted: false
	});
	React.useEffect(() => {
		GetAllMessages().then(data => {
			let visitorsData = data
				.filter(item => item.type === "VISIT")
				.map(item => ({
					geoLocation: JSON.parse(item.geoLocation),
					timePageRequested: item.timePageRequested,
					_id: item._id
				}));
			let emailsData = data
				.filter(item => item.type === "EMAIL")
				.map(item => ({
					geoLocation: JSON.parse(item.geoLocation),
					message: JSON.parse(item.message),
					timePageRequested: item.timePageRequested,
					_id: item._id
				}));
			//   console.log(emailsData);
			setMsg({visitors: visitorsData, emails: emailsData});
		});
	}, [msg.hasDeleted]);

	function deleteItem(id) {
		if (window.confirm("Are you sure you want to delete?")) {
			DeleteMsgByID(id).then(() => {
				setMsg({visitors: [], emails: [], hasDeleted: !msg.hasDeleted});
			});
		}
	}

	return (
		<>
			<h2 className="text-center">Visitors</h2>
			<Table striped bordered hover size="sm" responsive>
				<thead>
				<tr>
					<th>Name</th>
					<th>Value</th>
				</tr>
				</thead>
				<tbody>
				{msg.visitors.length > 0 &&
				msg.visitors.map((item, index) => {
					if (typeof item.geoLocation.country !== "undefined") {
						let keys = Object.keys(item.geoLocation);
						return (
							<React.Fragment key={index}>
								{
									<tr>
										<th>Time</th>
										<th>
											{moment(item.timePageRequested).format(
												"DD-MM-YYYY HH:mm:ss",
												"UTC"
											)}
										</th>
									</tr>
								}
								{keys.map((key, index) => {
									if (
										[
											"ip",
											"city",
											"region",
											"country_name",
											"postal",
											"latitude",
											"longitude"
										].includes(key)
									)
										return (
											<tr key={index}>
												<th>{key}</th>
												<th>{item.geoLocation[key]}</th>
											</tr>
										);
								})}

								{
									<tr>
										<th></th>
										<th>
											<button
												className="btn btn-warning"
												onClick={() => deleteItem(item._id)}
											>
												remove
											</button>
										</th>
									</tr>
								}
							</React.Fragment>
						);
					} else {
						return null;
					}
				})}
				</tbody>
			</Table>
			<br/>
			<h2 className="text-center">Emails</h2>
			<Table striped bordered hover size="sm" responsive>
				<thead>
				<tr>
					<th>Name</th>
					<th>Value</th>
				</tr>
				</thead>
				<tbody>
				{msg.emails.length > 0 &&
				msg.emails.map((item, index) => {
					if (typeof item.geoLocation.country !== "undefined") {
						let keys = Object.keys(item.geoLocation);
						return (
							<React.Fragment key={index}>
								{
									<tr>
										<th>Time</th>
										<th>
											{moment(item.timePageRequested).format(
												"DD-MM-YYYY HH:mm:ss",
												"UTC"
											)}
										</th>
									</tr>
								}
								{keys.map((key, index) => {
									if (["city", "country_name", "postal"].includes(key))
										return (
											<tr key={index}>
												<th>{key}</th>
												<th>{item.geoLocation[key]}</th>
											</tr>
										);
								})}
								<tr>
									<th>Email Message</th>
									<th>
										<div
											dangerouslySetInnerHTML={{
												__html: String(item.message.emailMsg)
													.replace(/(<br\/>)+/gi, "")
													.replace(/h3/gi, "h6")
											}}
										/>
									</th>
								</tr>
								{
									<tr>
										<th></th>
										<th>
											<button
												className="btn btn-warning"
												onClick={() => deleteItem(item._id)}
											>
												remove
											</button>
										</th>
									</tr>
								}
							</React.Fragment>
						);
					} else {
						return null;
					}
				})}
				</tbody>
			</Table>
		</>
	);
};

export default getAllMessages;
