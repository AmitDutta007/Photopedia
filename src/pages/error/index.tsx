import Layout from "@/components/layout/Layout";
import * as React from "react";

interface IErrorProps { }

const Error: React.FunctionComponent<IErrorProps> = (props) => {
  return (
    <Layout>
      <div className="">
        error      </div>
    </Layout>

  );
};

export default Error;