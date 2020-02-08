import React from "react";
export function useGetPortfolios() {
  const [data, setData] = React.useState(null);
  const [dataRequested, setDataRequested] = React.useState(false);

  if (!dataRequested) {
    setDataRequested(true);

    fetch(process.env.BASE_URI + "/api/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: "{GetPortfolios{id title shortDescription technologiesUsed }}"
      })
    })
      .then(res => res.json())
      .then(res => {
        setData({ ...res.data });
      })
      .catch(err => {
        console.log(err);
        // window.alert(err);
      });
  }
  return { data };
}
