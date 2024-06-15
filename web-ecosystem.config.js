module.exports = {
  apps: [
    {
      name: 'wype-web-app',
      exec_mode: 'cluster',
      instances: 0,
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 4200',
    }
  ]
}