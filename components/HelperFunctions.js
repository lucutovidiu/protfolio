import {GraphQLClient} from "graphql-request";
import fetch from "isomorphic-unfetch";

let base_uri = process.env.BASE_URI || "http://localhost:3000";
if (typeof window !== "undefined") {
	base_uri = window.origin;
}

// let base_uri = "https://lucutovidiu.herokuapp.com";
const client = new GraphQLClient(base_uri + "/api/graphql");

export const fetchGraphQL = async function (query, headers = null) {
	if (headers) {
		{
			client.setHeaders(headers);
		}
		return client.request(query);
	} else {
		return client.request(query);
	}
};

export const checkIfisAuthorized = async function (jwtToken) {
	const url = "/api/CheckIfAuthenticated";
	return fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			jwtToken
		})
	}).then(data => {
		// console.log(data);
		return data.json();
	});
};

export function GetPortfoliosOnServer() {
	let query =
		"{GetPortfolios{id title shortDescription technologiesUsed thumbImage rootDirectory }}";
	return client.request(query);
}

export function AddTimeStampToFileName(fileName) {
	let timeStamp = new Date().getTime();
	let withoutExtension = fileName.split(/\..*$/)[0];
	withoutExtension += "_" + timeStamp;
	let extension = fileName.match(/\..*$/)[0];
	return withoutExtension + extension;
}

export function getPortofolioGraphQueryByID(id) {
	return `
  {
    GetPortfolio(_id:"${id}"){
      id
      title
      shortDescription
      technologiesUsed
      thumbImage
      moreImages{
        image_src
        image_description
      }
      fullDescription
      projectStartDate
      projectEndDate
      rootDirectory
      createdAt
      updatedAt
    }
  }
  `;
}

export async function sendMail(data) {
	return fetch("/api/sendMail", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			payload: {data}
		})
	})
		.then(r => r.json())
		.then(data => {
			return data;
		});
}

export async function sendMailVisitor() {
	return fetch("/api/sendMail/visitor", {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	});
}

export async function GetAllMessages() {
	try {
		let json = await fetch("/api/getAllMessages");
		return json.json();
	} catch (err) {
	}
}

export async function DeleteMsgByID(id) {
	try {
		let json = await fetch("/api/deleteMessage/" + id);
		return json.json();
	} catch (err) {
	}
}
