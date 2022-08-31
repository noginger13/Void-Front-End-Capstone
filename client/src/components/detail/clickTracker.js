import axios from 'axios';

export default function clickTracker(widget, element) {
  const date = new Date();
  const config = {
    headers: {
      Authorization: process.env.API_KEY
    }
  };
  const data = {
    element: element,
    widget: widget,
    time: date.toUTCString()
  };
  console.log(widget, element, date.toUTCString());
  axios
    .post(
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/interactions',
      data,
      config
    )
    .then(() => console.log('success'))
    .catch((err) => console.log(err));
}
