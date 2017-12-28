const handleHttpStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res.json();
  }
  throw res;
};

const createErrorHandler = defaultValue => res => {
  console.error('request failed', res);
  return defaultValue;
};

const payload =
  {
    channel: "#leads_test",
    username: "webhookbot",
    text: "",
    icon_emoji: ":moneybag:"
  }

export const postRequest = (data, isProduction) => {
  if (isProduction) {
    payload['channel'] = '#leads';
  }
  payload['text'] = data;
  return fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(handleHttpStatus).catch(createErrorHandler({}));
}


