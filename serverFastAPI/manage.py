from apps.main import create_app

import uvicorn

app = create_app()

if __name__ == '__main__':
    uvicorn.run("manage:app", host="127.0.0.1", port=8888, reload=True, debug=True, log_level="info")