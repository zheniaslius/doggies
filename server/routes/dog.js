import { Router } from 'express';
import multer from 'multer';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', async (req, res) => {
  const dogs = await req.context.models.Dog.find();
  return res.send(dogs);
});

router.get('/breed', upload.single('dog'), async (req, res) => {
  const photo = req.file;
  return res.send(photo);
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