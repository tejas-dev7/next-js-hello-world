import dotenv from "dotenv";
dotenv.config();

export default function Page() {
  console.log("Printing all envs", process.env);
  console.log("NEXT_PUBLIC_ORGANISATION_NAME: ", process.env.NEXT_PUBLIC_ORGANISATION_NAME);
  return <h1>Hello World from ENV: {process.env.NEXT_PUBLIC_ORGANISATION_NAME}</h1>;
}
