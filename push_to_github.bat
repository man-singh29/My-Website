@echo off
cd /d "%~dp0"
echo ====================================================
echo      Push Manish Singh Portfolio to GitHub
echo ====================================================
echo.
set /p REPO_URL="Enter your GitHub repository URL (e.g. https://github.com/man-singh29/portfolio.git): "
if "%REPO_URL%"=="" (
    echo No URL entered. Exiting...
    pause
    exit /b
)

echo.
echo Adding remote origin: %REPO_URL%
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo.
echo Pushing code to GitHub...
git push -u origin main

echo.
echo ====================================================
echo Done! Check your repository on GitHub.
echo ====================================================
pause
