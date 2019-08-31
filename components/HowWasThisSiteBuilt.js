import React from "react";

const HowWasThisSiteBuilt = () => {
  return (
    <div className="lp_info_wrapper pb-5">
      <div className="container p-4">
        <h4 className="lp_info_wrapper_intro text-center">
          How was this site built
        </h4>
      </div>
      <div className="container">
        <p className="lead text-left text-justify pt-2">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I have started building this porfolio
          website, so I excersise more on using my favorite technologies that
          are: NextJS with Node / Express for backend as well as mongoDB and
          Graphql, HTML/CSS and React on frontend. Backend server powered by
          NextJS, Node / Express as custom server for NextJS it uses MongoDB
          with mongoose and the GraphQL server route is protected with JWT token
          for unauthorized use, and GraphQL that allows me to easy modify the
          website in the future to be able to add more features to the database
          and website, also website has a authentication system with rolesm that
          allows only admin to ADD more projects and DELETE or EDIT existing
          ones. Also backend server allows emailing functionality for my contact
          page, as well as Login and authorization, each protected request to
          the server has to a a valid JSON Web Token, that will expire by
          default in 1 hour or when user logges out, or just simply close the
          website as I store it into the session storage of the browser. Front
          end witten with the help of ReactJS/Hooks, plus Redux + thunk for
          having a store where I can keep my data for easy async component data
          share, and state Update. Please check my portfolios tab to see other
          Projects / Apps I've made so far.
        </p>
      </div>
    </div>
  );
};

export default HowWasThisSiteBuilt;
