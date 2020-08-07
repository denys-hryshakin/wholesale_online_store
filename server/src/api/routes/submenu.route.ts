export
const express = require('express');

const router = express.Router();

router.get('/', (req: any, res: { json: (arg0: string[]) => void; }) => {
  res.json(['😀', '😳', '🙄']);
});

module.exports = router;
