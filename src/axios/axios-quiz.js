import axios from 'axios';

export default axios.create({
  baseURL: 'https://react-quiz-v2-default-rtdb.europe-west1.firebasedatabase.app/'
})