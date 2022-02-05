import axios from 'axios';
import { env } from '../environments';

export default axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
});
