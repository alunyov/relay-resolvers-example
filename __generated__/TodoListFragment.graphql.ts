/**
 * @generated SignedSource<<0d294d701b906a446dbc7ab70268eaee>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentRefs } from "relay-runtime";
export type TodoListFragment$data = {
  readonly todos: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"TodoItemFragment">;
  } | null> | null;
  readonly " $fragmentType": "TodoListFragment";
};
export type TodoListFragment$key = {
  readonly " $data"?: TodoListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoListFragment">;
};

import {todos as queryTodosResolver} from './../src/resolvers/Query';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "hasClientEdges": true
  },
  "name": "TodoListFragment",
  "selections": [
    {
      "kind": "ClientEdgeToClientObject",
      "concreteType": "Todo",
      "backingField": {
        "alias": null,
        "args": null,
        "fragment": null,
        "kind": "RelayLiveResolver",
        "name": "todos",
        "resolverModule": queryTodosResolver,
        "path": "todos"
      },
      "linkedField": {
        "alias": null,
        "args": null,
        "concreteType": "Todo",
        "kind": "LinkedField",
        "name": "todos",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoItemFragment"
          }
        ],
        "storageKey": null
      }
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "85cafdcb2c2d5b2d2625ff9bf65fe2db";

export default node;
