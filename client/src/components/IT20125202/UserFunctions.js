import axios from "axios";

export const customerRegister = newUser => {
    return axios.post('http://localhost:5000/customer/registration', {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            NIC: newUser.NIC,
            email: newUser.email,
            mobile: newUser.mobile,
            country: newUser.country,
            password: newUser.password
        })
        .then(res => {
            if (res.data.success) {
                window.alert('Registered successfully!');
            }
        })
        .catch(err => {
            return err
        })
} 