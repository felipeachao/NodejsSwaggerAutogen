const express = require('express');


const router = express.Router();


router.get('/', (_, res) => {

  res.send('Olá, mundo!');

});


router.post('/login', (req, res) => {
/*

  #swagger.description = 'Route for user authentication.'

*/


/*

  #swagger.parameters['email'] = {

	description: 'E-mail do usuário.',

    type: 'string',

    required: true,

    in: 'body',

    example: 'user@email.com',

  }


 #swagger.parameters['password'] = {

   description: 'Senha do usuário.',

   type: 'string',

   required: true,

   in: 'body',

   example: 'sdij12eh0f1',

  }

*/

  try {

    const { email, password } = req.body;

  

    if (!(email && password)) {

      res.status(400).send('Missing parameters. You must send email and password.');

    } else {

      res.status(200).send('Ok');

    }

  } catch(error) {

    res.status(500).send('Internal Server Error');

  }


});


router.get('/data', (_, res) => {

  res.json({ title: 'Data', content: 'Something.' });

});


module.exports = router;