const userModel = require("../../Models/user.model.js");
var bcrypt = require("bcryptjs");

class UserController {
    constructor() { }

    static registration = async (req, res) => {
        if (!req.body || Object.keys(req.body).length == 0) {
            res.status(200).send({
                res_code: 201,
                response: "Parameter is missing!"
            });
            return;
        } else if (!req.body.title) {
            res.status(200).send({
                res_code: 201,
                response: "Title name can't empty!"
            });
            return;
        } else if (!req.body.first_name) {
            res.status(200).send({
                res_code: 201,
                response: "First name can't empty!"
            });
            return;
        } else if (!req.body.last_name) {
            res.status(200).send({
                res_code: 201,
                response: "Last name can't empty!"
            });
            return;
        } else if (!req.body.email) {
            res.status(200).send({
                res_code: 201,
                response: "Email can't empty!"
            });
            return;
        } else if (!req.body.password) {
            res.status(200).send({
                res_code: 201,
                response: "Password can't empty!"
            });
            return;
        } else if (!req.body.mobile_code) {
            res.status(200).send({
                res_code: 201,
                response: "Mobile code can't empty!"
            });
            return;
        } else if (!req.body.phone) {
            res.status(200).send({
                res_code: 201,
                response: "Phone can't empty!"
            });
            return;
        }
        try {
            let email = req.body.email;
            let mobileCode = req.body.mobile_code;
            let phoneNumber = req.body.phone;
            let userMobileCheck = await userModel.findOne({ "mobile_code": mobileCode, "phone": phoneNumber }).select(['id', 'first_name', 'mobile_number_verified']);
            if (userMobileCheck != null && userMobileCheck) {
                res.send({
                    res_code: 201,
                    response: "This mobile number already exists in account."
                });
                return;
            }

            const userEmail = await userModel.findOne({ email: email });
            if (userEmail) {
                res.send({
                    res_code: 201,
                    response: "Email already exists!"
                });
                return;
            }
            let user = new userModel({
                title: req.body.title,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                mobile_code: mobileCode,
                phone: phoneNumber,
                email: email,
                password: bcrypt.hashSync(req.body.password, 8),
            });

            if (user) {
                await user.save(() => {
                    res.send({
                        res_code: 200,
                        response: "Registration successfully!"
                    })
                })
            } else {
                res.send({
                    res_code: 201,
                    response: "Something went error!"
                })
            }
        } catch (error) {
            res.send({
                res_code: 201,
                response: error.message
            });
        }
    }
}

module.exports = UserController;