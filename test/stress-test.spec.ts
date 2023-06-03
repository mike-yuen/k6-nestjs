import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1s', target: 1 },
    { duration: '10s', target: 10 },
  ],
};

export default function () {
  const res = http.get('http://localhost:3000?ip=113.161.32.10');
  check(res, { 'Status was 200: ': (r) => r.status === 200 });
  sleep(1);
}
