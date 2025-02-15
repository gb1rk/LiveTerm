import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  };
};

export const getQuote = async () => {
  const { data } = await axios.get('https://api.quotable.io/random');
  return {
    quote: `“${data.content}” — ${data.author}`,
  };
};

//export const getJoke = async () => {
//  const { data } = await axios.get('https://v2.jokeapi.dev/joke/Any');
//  return {
//    joke: `“${data.joke}”`,
//  };
//};
//export const getFact = async () => {
//  const { data } = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random?language=en');
//  return {
//    fact: `“${data.text}”`,
//  };
//};