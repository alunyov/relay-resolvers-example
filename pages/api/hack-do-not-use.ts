import type { NextApiRequest, NextApiResponse } from "next";
import { createOperationDescriptor } from "relay-runtime";

import { createRelayEnvironment } from "src/RelayEnvironment";

type Data = {
  data: { [key: string]: unknown };
};

// DO NOT USE THIS IN PRODUCTION.
// This is just an experimental way of running some of the
// relay resolvers on the server.
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // This handler is "executing" relay operation on the server.
  // Calling "environment.lookup(...)" will call into Relay Resolvers
  // and on the server the can read (or in the case of mutation)
  // update the data in the external stores.
  const operationName = req.body.requestParams?.name ?? null;
  const operation = await import(`__generated__/${operationName}.graphql`);
  const environment = createRelayEnvironment();
  const operationDescriptor = createOperationDescriptor(
    operation.default,
    req.body.variables
  );

  const snapshot = await environment.lookup(operationDescriptor.fragment);

  // 202 is non-committal, meaning that there is no way for the HTTP to later send an asynchronous
  // response indicating the outcome of processing the request.
  res.status(202).json({
    data: snapshot.data,
  });
}
