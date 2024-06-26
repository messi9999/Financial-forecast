module.exports = {
    apps : [{
      name: "my_fastapi_app",
      cmd: "/home/ubuntu/Financial-forecast/server/myenv/bin/uvicorn",
      args: "main:app --host 0.0.0.0 --port 8000",
      interpreter: "./myenv/bin/python",
      watch: true,
      env: {
        "ENV": "development",
      },
      env_production: {
        "ENV": "production",
      }
    }]
  }