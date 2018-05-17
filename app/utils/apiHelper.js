import axios from 'axios';


const url = 'https://api-stg.bliink.io/rest/v1/users?account_id=2';
export function getUsers() {
  return fetch(url, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkB0ZXN0LnRlc3QiLCJleHAiOiIxNTI2MzU3ODA2IiwiaWF0IjoxNTI2MzU0MjA2fQ.xEcrNlndLUpZhvYd86c81AobIkwpTU-4nLjm3_jb477ufflQL7FVK4BnzNruXKcRZGkup2N6nYatac1Q2XCDeYpPszmq4BGqbvWZECURejki-GW3rMk7Weq5Sb8h45Nn6ZhB2kw4YEumTP8Kv8J8cP4GUycr5YooowuSGpxswacZiBfInIO0eJ2qCuYobr89hFuxdZG4Foy8HkscoCq1cd41sCFw6H4SBbKrlyzIiXPPOHC8rJ114acNZhN165FKYf7BPTMoEGHPh0KtQ0210TQiUCLBd9Y7A-6UX6Hk3pcAfN2vbCRwi2ezXJnlGzlifl0FeuEy5S2FVqZDLl3bIg',
      mode: 'no-cors'
    }
  }).then((res) => console.log(res))
}

const pack_url = '/rest/v1/packs?account_id=2';
export function getPacks() {
  return fetch(pack_url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkB0ZXN0LnRlc3QiLCJleHAiOiIxNTI2NDQ3Mzc5IiwiaWF0IjoxNTI2NDQzNzc5fQ.NmjxYYLsKCFJQjdzKaB9rXHuNebZ0wVDxYEKLtRrbgpQLEGnLRWDqNrDTECHZcyKaae-ow7FPfTmLfTyS_t2jsltK6vPPG7K77e3VJeTQeqSstOgjpa_7DolzeM8Y_y4x8nYXLW8LaJXkuhLf5XlwDtFIbuwsQUAY_SJQ8yiIQZIaqQ1nJQm1rmLUm4S8gdTfVr4aKVvciKH_Tg-SdGiqbcNK0_PWMcutsbCXMKrHKnekqd9H8caC3Ff0mAwlR6x_XXGcEHXQ6WD7MhVGG8upyYcw3p_2tsQjdaEGnmMft1HoRmKPZ9Lj7k-AsmLWUllfFwq6cSwmpYGYpJgk_rNTw',
      // mode: 'no-cors'
    },
  }).then((res) => console.log(res))
}
// const api_url = '/rest/v1/';
// export default function callApi(endpoint, method = 'GET', body) {
//   return axios({
//     method: method,
//     url: `${api_url}/${endpoint}?account_id=2`,
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXUyJ9.eyJpZCI6MiwiZW1haWwiOiJhZG1pbkB0ZXN0LnRlc3QiLCJleHAiOiIxNTI2NDQ3Mzc5IiwiaWF0IjoxNTI2NDQzNzc5fQ.NmjxYYLsKCFJQjdzKaB9rXHuNebZ0wVDxYEKLtRrbgpQLEGnLRWDqNrDTECHZcyKaae-ow7FPfTmLfTyS_t2jsltK6vPPG7K77e3VJeTQeqSstOgjpa_7DolzeM8Y_y4x8nYXLW8LaJXkuhLf5XlwDtFIbuwsQUAY_SJQ8yiIQZIaqQ1nJQm1rmLUm4S8gdTfVr4aKVvciKH_Tg-SdGiqbcNK0_PWMcutsbCXMKrHKnekqd9H8caC3Ff0mAwlR6x_XXGcEHXQ6WD7MhVGG8upyYcw3p_2tsQjdaEGnmMft1HoRmKPZ9Lj7k-AsmLWUllfFwq6cSwmpYGYpJgk_rNTw',
//       mode: 'no-cors'
//     },
//     data: body
//   }).catch(err => {
//     console.log(err);
//   })
// }

// const url = 'https://jsonplaceholder.typicode.com/users';
// export function getUsers() {
//   return fetch(url, {
//     method: "GET",
//   }).then((res) => res.json())
// }
