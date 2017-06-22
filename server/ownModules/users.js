
  var users = [
    {

      "firstName":"Rayleigh",
      "lastName":"Silvers",
      "nickName":"The Dark King",
      "birthday":"1920-05-13",
      "gender":"Male",
      "userName":"sRayleigh",
      "password":"silvers1234",
      "role":"instructor"
    },
    {
      
      "firstName":"Luffy",
      "lastName":"Monkey D",
      "nickName":"Straw Hat Luffy",
      "birthday":"2000-05-05",
      "gender":"Male",
      "userName":"lMonkey",
      "password":"d12345678",
      "role":"student"

    }
  ];

exports.findAll = function() {
  	return users;
  };

exports.findUserLogin = function (param) {
  	for (var i = 0; i < users.length; i++) {
  		if (users[i].userLogin == param.userLogin && users[i].password == param.password) return users[i];
  	}
};
