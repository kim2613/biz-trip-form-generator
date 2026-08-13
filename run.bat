@echo off
cd /d "%~dp0"
echo 서버를 시작합니다...
start http://localhost:8000
python -m http.server 8000
pause
