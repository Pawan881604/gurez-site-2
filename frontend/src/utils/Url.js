function client_url() {
  return 'http://localhost:8000';
}
function server_url() {
  // return 'http://localhost:8000';
  return process.env.NODE_ENV === 'production' ? 'https://api.gurez.com' : 'http://localhost:8000';
  // return 'https://new-live-gurez.onrender.com' 
  // return 'https://new-live-git-main-gurez001s-projects.vercel.app' 
  // return 'http://localhost:3000';
}

export {client_url,server_url};
