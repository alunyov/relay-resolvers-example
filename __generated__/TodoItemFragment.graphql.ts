/**
 * @generated SignedSource<<f5293eb32162e2e84f9c5eecafad4805>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentRefs } from "relay-runtime";
export type TodoItemFragment$data = {
  readonly completed: boolean | null;
  readonly description: string | null;
  readonly id: string;
  readonly " $fragmentSpreads": FragmentRefs<"ToggleTodoFragment">;
  readonly " $fragmentType": "TodoItemFragment";
};
export type TodoItemFragment$key = {
  readonly " $data"?: TodoItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoItemFragment">;
};

import Todo____relay_model_instance_graphql from './Todo____relay_model_instance.graphql';
import {completed as todoCompletedResolver} from './../src/resolvers/Todo';
import {description as todoDescriptionResolver} from './../src/resolvers/Todo';
import {resolverDataInjector} from 'relay-runtime/experimental';

const node: ReaderFragment = (function(){
var v0 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "Todo____relay_model_instance"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItemFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": (v0/*: any*/),
      "kind": "RelayResolver",
      "name": "description",
      "resolverModule": resolverDataInjector(Todo____relay_model_instance_graphql, todoDescriptionResolver, '__relay_model_instance', false),
      "path": "description"
    },
    {
      "alias": null,
      "args": null,
      "fragment": (v0/*: any*/),
      "kind": "RelayResolver",
      "name": "completed",
      "resolverModule": resolverDataInjector(Todo____relay_model_instance_graphql, todoCompletedResolver, '__relay_model_instance', false),
      "path": "completed"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ToggleTodoFragment"
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
})();

(node as any).hash = "433849b0eacaa4da76a3530862676f3c";

export default node;
