import Layout from "@/components/layout/Layout";
import * as React from "react";

interface IMyPhotosProps { }

const MyPhotos: React.FunctionComponent<IMyPhotosProps> = (props) => {
  return (
    <Layout>
      <div className="">
        MyPhotos
      </div>
    </Layout>

  );
};

export default MyPhotos;