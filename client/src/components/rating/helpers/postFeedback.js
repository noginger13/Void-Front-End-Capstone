const axios = require('axios');

const postFeedback = (id, type) => {
  var data = JSON.stringify({
    review_id: Number(id)
  });

  var config = {
    method: 'put',
    url:  `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${id}/${type}`,
    headers: {
      Authorization: `${process.env.API_KEY}`,
      'Content-Type': 'application/json'
    },
    data: data
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

module.exports = postFeedback;
