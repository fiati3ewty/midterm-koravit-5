import api from './mainApi';

export const getAllTodo = async () => {
  try {
    const res = await api.get('/todosv2');
    console.log('Res todo data', res.data);
    return res.data;
  } catch (error) {
    console.log('Get all todo error', error);
  }
};
