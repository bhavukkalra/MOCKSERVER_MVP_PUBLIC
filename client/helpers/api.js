// Shared logic that can be used in multiple components
// similar to redux => as it is shared state

require('dotenv').config();

// if not using proxy write full path(base = http://localhost:4000/api/auth/login)
// @method : GET, POST etc
//@path :
const call = async (method, path, data) => {

  const url = `${process.env.BASE_URL}:${process.env.PORT}/api/${path}`;
  // const response = await axios[method](
  //   `http://localhost:4000/api/${path}`,
  //   data
  // )

  const response = await axios[method](url,data)
  return response.data
}

export default { call }
