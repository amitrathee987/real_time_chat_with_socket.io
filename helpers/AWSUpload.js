const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

AWS.config.update({
	accessKeyId:'AKIAQRY2BSGD62QV2ZFS',
	secretAccessKey:'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',
	region:'ap-south-1',
});

const S0 = new AWS.S3({});

const upload = multer({
	storage: multerS3({
		s3: S0,
		bucket: 'tienupuserimage',
		acl: 'public-read-write',
		metadata: function(req, file, cb) {
			cb(null, { fieldName: file.fieldname });
		},
		key: function(req, file, cb) {
			cb(null, file.originalname);
		},
	}),
});

exports.Upload = upload;