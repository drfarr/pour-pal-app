import { Outlet, ScrollRestoration } from "react-router-dom";

import { BaseLayout } from "@/layout";

const RootPage = () => {
  return (
    <BaseLayout>
      <Outlet />
      <ScrollRestoration />
    </BaseLayout>
  );
};

export default RootPage;
