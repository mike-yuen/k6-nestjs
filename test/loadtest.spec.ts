import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10,
  // duration: '30s',
  thresholds: {
    http_req_duration: ['p(95)<1500'],
  },
  tags: {
    environment: 'production',
  },
  stages: [
    { duration: '10s', target: 100 },
    { duration: '20s', target: 200 },
  ],
};

export default function () {
  const res = http.post(
    'http://localhost:3000/user',
    JSON.stringify({
      name: `User ${__VU}-${__ITER}`,
      email: `user${__VU}-${__ITER}@gmail.com`,
      password: 'password',
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
  check(res, { 'Status was 201: ': (r) => [200, 201].includes(r.status) });
  sleep(1);
}
