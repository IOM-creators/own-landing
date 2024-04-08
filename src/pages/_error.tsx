import { NextPage, GetServerSideProps } from "next";

interface ErrorProps {
  statusCode: number;
}

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode === 404 ? "Page not found" : "An error occurred"}</h1>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ErrorProps> = async ({
  res,
  err,
}: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { props: { statusCode } };
};

export default ErrorPage;
