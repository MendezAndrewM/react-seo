/*
 * Copyright 2020 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,either express
 * or implied. See the License for the specific language governing permissions and limitations
 * under the License.
 */

import getTagsFromSchema from './getTagsFromSchema';
import {
  TWITTER_APP_CARD_SCHEMA,
  TWITTER_PLAYER_CARD_SCHEMA,
  TWITTER_SUMMARY_CARD_SCHEMA,
} from './constants';

const schemas = {
  player: TWITTER_PLAYER_CARD_SCHEMA,
  app: TWITTER_APP_CARD_SCHEMA,
  summary: TWITTER_SUMMARY_CARD_SCHEMA,
  summary_with_large_image: TWITTER_SUMMARY_CARD_SCHEMA,
};

const getTwitterCardTags = (tags) => {
  if (schemas[tags.card]) {
    return getTagsFromSchema(schemas[tags.card], tags);
  }

  throw new Error(`Unsupported Twitter Card type: ${tags.card}`);
};

export default getTwitterCardTags;
