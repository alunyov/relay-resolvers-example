/**
 * @generated SignedSource<<dd95c4dd3d25c9f96a5194c0c044931b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentRefs } from "relay-runtime";
export type Todo__id$data = {
  readonly id: string;
  readonly " $fragmentType": "Todo__id";
};
export type Todo__id$key = {
  readonly " $data"?: Todo__id$data;
  readonly " $fragmentSpreads": FragmentRefs<"Todo__id">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Todo__id",
  "selections": [
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

export default node;
