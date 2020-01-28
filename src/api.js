import axios from 'axios'

const base = axios.create({baseURL:'http://localhost:3001/'})

const api = {
  loadCategories: () => base.get('categories'),
  loadMenu: () => base.get('menu'),
  loadFilteredMenu: (type) => base.get(`menu?type=${type}`),
  loadSocials: () => base.get('socials'),
}

export default api