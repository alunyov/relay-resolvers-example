/**
 * @generated SignedSource<<3e32b843aae7e019664dccb9db48a7c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateTodoMutation$variables = {
  id: string;
  todo?: string | null;
};
export type CreateTodoMutation$data = {
  readonly create_todo: boolean | null;
};
export type CreateTodoMutation = {
  response: CreateTodoMutation$data;
  variables: CreateTodoMutation$variables;
};

import {create_todo as mutationCreateTodoResolver} from './../src/resolvers/Mutation';

const node: ClientRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "todo"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  },
  {
    "kind": "Variable",
    "name": "text",
    "variableName": "todo"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateTodoMutation",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "fragment": null,
            "kind": "RelayResolver",
            "name": "create_todo",
            "resolverModule": mutationCreateTodoResolver,
            "path": "create_todo"
          }
        ]
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateTodoMutation",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "name": "create_todo",
            "args": (v1/*: any*/),
            "fragment": null,
            "kind": "RelayResolver",
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "8d0a1fd8aafded9eabcbb23f65cd9c60",
    "id": null,
    "metadata": {},
    "name": "CreateTodoMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "7f7b8b69cd8a6d7034eabf51e82d6383";

export default node;
