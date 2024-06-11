module.exports = {
  apps: [
    {
      name: 'web',
      exec_mode: 'cluster',
      instances: 0,
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
    }
  ]
}