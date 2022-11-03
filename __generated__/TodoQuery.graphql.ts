/**
 * @generated SignedSource<<623282838309b24dca26eda2dff3aea2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ClientRequest, ClientQuery } from 'relay-runtime';
import type { FragmentRefs } from "relay-runtime";
export type TodoQuery$variables = {};
export type TodoQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"TodoListFragment">;
};
export type TodoQuery = {
  response: TodoQuery$data;
  variables: TodoQuery$variables;
};

const node: ClientRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TodoListFragment"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "name": "todos",
            "args": null,
            "fragment": null,
            "kind": "RelayResolver",
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "dc111e741d2729746ea515cc42c135da",
    "id": null,
    "metadata": {},
    "name": "TodoQuery",
    "operationKind": "query",
    "text": null
  }
};

(node as any).hash = "d83339994228a9d6cff43d53320d64e7";

export default node;
