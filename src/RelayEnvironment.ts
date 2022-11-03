import {
  Environment,
  Network,
  RecordSource,
  FetchFunction,
} from "relay-runtime";

import { RelayFeatureFlags } from "relay-runtime";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LiveResolverStore } from "relay-runtime/experimental";

RelayFeatureFlags.ENABLE_RELAY_RESOLVERS = true;
RelayFeatureFlags.ENABLE_CLIENT_EDGES = true;

const HTTP_ENDPOINT = "/api/hack-do-not-use";

const fetchFn: FetchFunction = async (request, variables) => {
  const resp = await fetch(HTTP_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: request.text,
      variables,
      requestParams: request,
    }),
  });

  return await resp.json();
};

export function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new LiveResolverStore(RecordSource.create()),
  });
}

let relayEnvironment: Environment | undefined;

export function initRelayEnvironment() {
  const environment = relayEnvironment ?? createRelayEnvironment();

  // For SSG and SSR always create a new Relay environment.
  if (typeof window === "undefined") {
    return environment;
  }

  // Create the Relay environment once in the client
  // and then reuse it.
  if (!relayEnvironment) {
    relayEnvironment = environment;
  }

  return relayEnvironment;
}
