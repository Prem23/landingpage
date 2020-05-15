const  axios = require ('axios');

module.exports = (req,res)  =>{
    axios.get("http://dummy.restapiexample.com/api/v1/employees")
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        res.send(error);
      }) 
}

