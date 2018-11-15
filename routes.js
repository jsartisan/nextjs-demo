const routes = require('next-routes')

module.exports = routes()                           
  .add('home', '/', 'Home')
  .add('about', '/about', 'About')
  .add('posts', '/posts/:slug', 'Post');