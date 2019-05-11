import { Router } from 'express';
import multer from 'multer';

import * as helpers from './helpers';

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage })

router.get('/', async (req, res) => {
  const dogs = await req.context.models.Dog.find();
  return res.send(dogs);
});

router.post('/similar', upload.single('dog'), async (req, res) => {
  const photo = req.file.buffer.toString('base64');

  const labels = await helpers.getLabels(photo);
  const breeds = await helpers.getDogBreeds(labels);
  const allBreeds = await helpers.getAllBreeds();
 
  const similarBreeds = labels.filter(label => helpers.hasSimilarWord(label.description, breeds));
  
  const breedsDetected = await helpers.getBreedNameFromDB(similarBreeds, allBreeds);
  const dogsWithSearchBreed = await req.context.models.Dog.findByBreed(breedsDetected);
  res.send(dogsWithSearchBreed)
});

router.get('/:dogId', async (req, res) => {
  const dog = await req.context.models.Dog.findById(
    req.params.dogId,
  );
  return res.send(dog);
});

router.post('/', async (req, res) => {
  const message = await req.context.models.Dog.create({
    name: req.body.name,
    gender: req.body.gender,
    breed: req.body.breed,
    description: req.body.description,
    photo: req.body.photo,
  });

  return res.send(message);
});

router.delete('/:dogId', async (req, res) => {
  const dog = await req.context.models.Dog.findById(
    req.params.dogId,
  );

  let result = null;
  if (dog) result = await dog.remove();

  return res.send(result);
});

export default router;