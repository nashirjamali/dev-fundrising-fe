import axios from '@/configs/axios';
import { FieldValues } from 'react-hook-form';

export const login = async (data: FieldValues) => {
  const { username, password } = data;

  const response = await axios.post('/auth/local', {
    identifier: username,
    password
  });

  return response;
};
