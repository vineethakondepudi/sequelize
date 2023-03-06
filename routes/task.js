var express = require('express');
var router = express.Router();
// const bodyParser = require('body-parser')
// const promise = require('bluebird');

// router.get('/',(req,res)=>{
//     res.send("vinnu")
// })
router.get('/', (req, res)=> {
    res.send("koti");
  });

// router.use(bodyParser.json())

// /*************
//  * <ROUTES> 
//  *************/
//  router.post('/api/payments', async(req, res) => {
//     const result = await paymentModel.create(req.body)
//     if (result.code === 'ER_DUP_ENTRY')
//         return res.status(400).send('Payment already exists!!!!')

//     return res.status(200).json(result)
// })

// router.get('/api/payments/:id', async(req, res) => {
//     const result = await paymentModel.getById(req.params.id)
//     return res.status(200).json(result)
// })

// router.get('/api', (req, res) => res.send('API OK'))

// /*************
//  * </ROUTES> 
//  *************/

 

// // TODO: must export this to be able to perform integration and end-to-end tests
module.exports = router;
