/**
 * @generated SignedSource<<8b7813d77ca44b60afd0aea176c26b62>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type ToggleTodoMutation$variables = {
  todoID: string;
};
export type ToggleTodoMutation$data = {
  readonly toggle_todo: boolean | null;
};
export type ToggleTodoMutation = {
  response: ToggleTodoMutation$data;
  variables: ToggleTodoMutation$variables;
};

import {toggle_todo as mutationToggleTodoResolver} from './../src/resolvers/Mutation';

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
    "name": "ToggleTodoMutation",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "fragment": null,
            "kind": "RelayResolver",
            "name": "toggle_todo",
            "resolverModule": mutationToggleTodoResolver,
            "path": "toggle_todo"
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
    "name": "ToggleTodoMutation",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "name": "toggle_todo",
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
    "cacheID": "d7e6a44a626dea29dff183f98793da3c",
    "id": null,
    "metadata": {},
    "name": "ToggleTodoMutation",
    "operationKind": "mutation",
    "text": null
  }
};
})();

(node as any).hash = "d7b3b84d6e9322cce688e3b0b29f1a4b";

export default node;
