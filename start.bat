@echo off
title Manish Singh Portfolio
cd /d "%~dp0"
echo ==============================================
echo   Starting Manish Singh Portfolio Website...
echo ==============================================
echo Opening browser at http://localhost:3000
start http://localhost:3000
cmd /c npm run dev
pause
