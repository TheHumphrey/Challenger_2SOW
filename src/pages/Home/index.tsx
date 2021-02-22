import React, { ReactElement } from "react";

import { Table, GeneralLayout } from "../../components";

const Home = (): ReactElement => (
  <div>
    <GeneralLayout>
      <Table />
    </GeneralLayout>
  </div>
);

export default Home;
