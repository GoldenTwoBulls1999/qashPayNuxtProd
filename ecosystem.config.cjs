module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      exec_mode: 'cluster',
      instances: 'max',
      script: '/opt/qashPay/.output/server/index.mjs',
      env: {
        PORT: 3000,
        BACKEND_BASE_URL: "https://jpbagc20ea.execute-api.eu-west-2.amazonaws.com/Production",
        BACKEND_API_KEY: "",
        TURNSTILE_SITE_KEY: "",
        TURNSTILE_SECRET_KEY: ""
      }
    }
  ]
}
