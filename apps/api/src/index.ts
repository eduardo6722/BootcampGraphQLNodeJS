import server from "./server";

const main = async (): Promise<void> => {
  await server.start(({ port }) => console.log(`Server on port ${port}`));
};

main().catch(console.log);
