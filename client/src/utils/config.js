
let baseUrl = '';

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://127.0.0.1:8888/api';
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://47.98.103.114:8000/api';
}

export {
  baseUrl,
}