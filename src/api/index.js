import axios from 'axios'

const apis = axios.create({
  baseURL:'http://localhost:4000/api'
})

export const getAllTutorial = () => api.get(`/gettuto`);

export default getAllTutorial
