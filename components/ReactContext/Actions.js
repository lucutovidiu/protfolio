import { fetchGraphQL } from "../HelperFunctions";
// export function GET_PORTFOLIOS() {
//   const query = `{
//         GetPortfolios{
//          id
//         title
//           shortDescription
//           technologiesUsed
//         }
//         }`;
//   return (dispatch, getState) => {
//     fetchGraphQL(query)
//       .then(data => {
//         dispatch({ type: "GET_PORTFOLIOS", payload: { ...data } });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
// }
// export function DELETE_PORTFOLIOS(id) {
//   const query = `mutation{
//         RemovePortfolio(portfolioID: "${id}")
//         }`;
//   return (dispatch, state) => {
//     const headers = {
//       Authorization: state().jwt
//     };
//     dispatch({ type: "REMOVE_PORTFOLIOS", payload: id });
//     // fetchGraphQL(query, headers)
//     //   .then(data => {
//     //     console.log("deleted project:", data);
//     //     if (data) {
//     //       dispatch({ type: "REMOVE_PORTFOLIOS", payload: id });
//     //     }
//     //   })
//     //   .catch(err => {
//     //     console.log(err);
//     //   });
//   };
// }
