/**
 * @generated SignedSource<<7446788395918bb898f6722bc344b693>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteTodoMutation$variables = {
  todoID: string;
};
export type DeleteTodoMutation$data = {
  readonly delete_todo: boolean | null;
};
export type DeleteTodoMutation = {
  response: DeleteTodoMutation$data;
  variables: DeleteTodoMutation$variables;
};

import {delete_todo as mutationDeleteTodoResolver} from './../src/resolvers/Mutation';

const node: ClientRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "todoID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "todoID"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTodoMutation",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "fragment": null,
            "kind": "RelayResolver",
            "name": "delete_todo",
            "resolverModule": mutationDeleteTodoResolver,
            "path": "delete_todo"
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
    "name": "DeleteTodoMutation",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "name": "delete_todo",
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
    "cacheID": "929fd5483d380755190c970ce3b95aeb",
    "id": null,
    "metadata": {},
    "name": "DeleteTodoMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "8806c779c19884fbf58b40e6cb666ce9";

export default node;
