let express = require('express');
let router = express.Router();
let upload = require('../config/multer.config.js');
// const bodyParser = require('body-parser')
 
//-------
const s3 = require('../config/s3.config.js');


// const awsWorker = require('../controllers/aws.controller.js');

router.get('/',(req,res)=>{
    res.render('index')
})

router.post('/',(req,res)=>{
    const s3Client = s3.s3Client;
	const params = s3.uploadParams;

	params.Key =  req.body.nombre //'file2'//req.body.nombre;
	params.Body = req.body.nombre//req.body.buffer;
	s3Client.upload(params, (err, data) => {
		if (err) {
			res.status(500).json({error:"Error -> " + err});
		}
		res.redirect('/');
	});
});
 
module.exports = router;


 
 
exports.doUpload = (req, res) => {
	
}
