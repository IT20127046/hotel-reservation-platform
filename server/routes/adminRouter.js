const express = require('express');
const Admin = require('../models/adminModel');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = express.Router();

//login
router.post('/admin', async (req, res) => {
	const admin = await Admin.findOne({
		username: req.body.username,
	})

	if (!admin) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		admin.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				username: admin.username,
			},
			'secret2022'
		)
		return res.json({ status: 'ok', admin: token })
	} else {
		return res.json({ status: 'error', admin: false })
	}
})

//register
// router.post('/admin', async (req, res) => {
// 	// console.log(req.body)
// 	try {
// 		const newPassword = await bcrypt.hash(req.body.password, 10)
// 		await Admin.create({
// 			username: req.body.username,
// 			password: newPassword
// 		})
// 		res.json({ status: 'ok', success: "Registered succcessfully"})
// 	} catch (err) {
// 		res.json({ status: 'error', error: err })
// 	}
// })

module.exports = router;