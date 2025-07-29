module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 'max',
      script: '/opt/qashPay/.output/server/index.mjs',
      env: {
        PORT: 3000
      }
    },
    {
      name: 'SecondApp',
      exec_mode: 'fork', // or 'cluster' if it supports it
      instances: 1,
      script: '/opt/qashPayDev/.output/server/index.mjs', // adjust the path
      env: {
        PORT: 3001
      }
    }
  ]
}
