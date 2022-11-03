/**
 * @generated SignedSource<<a738723bf203d56d69a91f1ce5c6845d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentRefs } from "relay-runtime";
export type Todo____relay_model_instance$data = {
  readonly __relay_model_instance: ReturnType<ReturnType<typeof todoRelayModelInstanceResolver>["read"]> | null;
  readonly " $fragmentType": "Todo____relay_model_instance";
};
export type Todo____relay_model_instance$key = {
  readonly " $data"?: Todo____relay_model_instance$data;
  readonly " $fragmentSpreads": FragmentRefs<"Todo____relay_model_instance">;
};

import Todo__id_graphql from './Todo__id.graphql';
import {Todo as todoRelayModelInstanceResolver} from './../src/resolvers/Todo';
import {resolverDataInjector} from 'relay-runtime/experimental';

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo____relay_model_instance",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Todo__id"
      },
      "kind": "RelayLiveResolver",
      "name": "__relay_model_instance",
      "resolverModule": resolverDataInjector(Todo__id_graphql, todoRelayModelInstanceResolver, 'id', true),
      "path": "__relay_model_instance"
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

export default node;
