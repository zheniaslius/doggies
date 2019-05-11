import axios from 'axios';
import qs from 'qs';
import Fuse from 'fuse.js';

import { VISION_API_URL, KGSEARCH_API_URL } from '../../config';

import { normalizeWord } from '../../helpers';

export const getLabels = async photo => {
  const result = await axios.post(`${VISION_API_URL}:annotate?key=${process.env.API_KEY}`, {
    requests: [
      {
        image: {
          content: photo
        },
        features: [
          { type: 'LABEL_DETECTION' }
        ],
      }
    ]
  })
  return result.data.responses[0].labelAnnotations;
}

export const getDogBreeds = async labels => {
  const enitities = await axios.get(`${KGSEARCH_API_URL}:search?key=${process.env.API_KEY}`, {
    params: {
      ids: labels.map(label => label.mid)
    },
    paramsSerializer: params => qs.stringify(params, {arrayFormat: 'repeat'})
  })

  return enitities.data.itemListElement
    .map(res => res.result)
    .filter(item => item.description === 'Dog breed')
    .map(item => normalizeWord(item.name))
}

export const getAllBreeds = async () => {
  const res = await axios.get('https://dog.ceo/api/breeds/list');
  return res.data.message;
}

export const hasSimilarWord = (wordToFind, arr) => {
  let wordFound = false;
  arr.forEach(item => {
    if (item.includes(wordToFind)) {
      wordFound = true;
    }
  })
  return wordFound ? true : false;
}

export const getBreedNameFromDB = async (similarBreeds, allBreeds) => {
  const obj = allBreeds.map(item => ({ id: item}));
  const fuse = new Fuse(obj, {keys: ['id']});

  let fuseRes = [];
  for (i = 0; i < 3; i++) {
    if (similarBreeds[i]) {
      fuseRes.push(fuse.search(similarBreeds[i].description)[0]);
    }
  }
  return [...new Set(fuseRes)].map(item => item.id);
}