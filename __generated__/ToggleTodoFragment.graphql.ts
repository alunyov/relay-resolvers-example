/**
 * @generated SignedSource<<82995e95d2714b673d506046d12189a9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentRefs } from "relay-runtime";
export type ToggleTodoFragment$data = {
  readonly completed: boolean | null;
  readonly id: string;
  readonly " $fragmentType": "ToggleTodoFragment";
};
export type ToggleTodoFragment$key = {
  readonly " $data"?: ToggleTodoFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ToggleTodoFragment">;
};

import Todo____relay_model_instance_graphql from './Todo____relay_model_instance.graphql';
import {completed as todoCompletedResolver} from './../src/resolvers/Todo';
import {resolverDataInjector} from 'relay-runtime/experimental';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ToggleTodoFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Todo____relay_model_instance"
      },
      "kind": "RelayResolver",
      "name": "completed",
      "resolverModule": resolverDataInjector(Todo____relay_model_instance_graphql, todoCompletedResolver, '__relay_model_instance', false),
      "path": "completed"
    },
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "26193773a40a31a8399fa0d2d740e023";

export default node;
