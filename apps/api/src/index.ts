import server from "./server";
import { connect } from "./models";

const main = async (): Promise<void> => {
  await connect();
  await server.start(({ port }) => console.log(`Server on port ${port}`));
};

main().catch(console.log);
