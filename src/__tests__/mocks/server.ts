import { setupServer } from "msw/node";
import { handlers } from "@/__tests__/mocks/handlers";
const server = setupServer(...handlers);
export default server;
