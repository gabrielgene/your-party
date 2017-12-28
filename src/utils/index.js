const payload = {
  channel: "#leads_test",
  username: "webhookbot",
  text: "",
  icon_emoji: ":moneybag:"
}

const url = 'https://your-party-api.herokuapp.com/';

export const postRequest = (data) => {
  const text =
    `services: ${data.request.services}
amount: ${data.request.amount}
when: ${data.request.when}
addInfo: ${data.request.addInfo}
name: ${data.data.name}
place: ${data.data.place}
phone: ${data.data.phone}
email: ${data.data.email}
`;
  payload['text'] = '```' + text + '```';
  return fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  });
}
