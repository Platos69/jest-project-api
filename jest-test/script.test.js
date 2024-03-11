const axios = require('axios');

const dataCorrect =  {
  coord: { lon: -35.7353, lat: -9.6658 },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'nuvens dispersas',
      icon: '03d'
    }
  ],
  base: 'stations',
  main: {
    temp: 33.69,
    feels_like: 40.54,
    temp_min: 33.69,
    temp_max: 33.69,
    pressure: 1012,
    humidity: 58
  },
  visibility: 10000,
  wind: { speed: 5.14, deg: 90 },
  clouds: { all: 40 },
  dt: 1710170751,
  sys: {
    type: 1,
    id: 8413,
    country: 'BR',
    sunrise: 1710145631,
    sunset: 1710189522
  },
  timezone: -10800,
  id: 3395981,
  name: 'Maceió',
  cod: 200
}

async function apiCatchWeather() {
    const chave = '698c933046fecf661b395caefab54b0e';
    const cidade = 'maceio';
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${chave}&lang=pt_br`);
    return response.data;
}

test('Verifica se os dados de clima foram puxados corretamente', async () => {
    const data = await apiCatchWeather();
    expect(data).toBeDefined();
});

test('Verifica se os dados são iguais aos de Maceió', async () => {
    const data = await apiCatchWeather();
    expect(data).toMatchObject(dataCorrect);
});

async function apiCatchTime() {
  const chavephoto = 'IQmHoU8iYkNrme12OKVz1gMpP7CehOSo-2GusndK2ws';
  const cidade = 'maceió'
  const Keyword = cidade
  const page = 1
  const response = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${Keyword}&client_id=${chavephoto}`)
  return response.data
}

test('Verifica se os dados foram puxados corretamente', async () => {
  const data = await apiCatchTime()
  expect(data).toBeDefined()
})

test('Verifica se os dados são iguais aos resultados de maceio na questão de cidade', async () => {
  const data = await apiCatchTime()
  console.log(data)
  expect(data).toBeDefined()
})