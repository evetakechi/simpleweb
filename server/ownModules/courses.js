
  var courses = [
    {
      "courseName":"Busoshoku Haki",
      "category":"Fighting",
      "description":"Busoshoku Haki with Rayleigh Silvers",
      "subject":"Haki I ",
      "time":"7 days",
      "userName":"sRayleigh",
      "maxStudent":10,
      "currentStudent":0,
      "courseStatus":"open"
    },
    {

      "courseName":"Kenbunshoku Haki",
      "description":"Kenbunshoku Haki with Rayleigh Silvers",
      "category":"Fighting",
      "subject":"Haki II",
      "time":"7 days",
      "userName":"sRayleigh",
      "maxStudent":10,
      "currentStudent":0,
      "courseStatus":"open"
    }
  ];
  exports.findAll = function() {
    	return courses;
    };
