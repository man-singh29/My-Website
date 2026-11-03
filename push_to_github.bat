@echo off
cd /d "%~dp0"
echo ====================================================
echo      Updating and Pushing Portfolio to GitHub
echo ====================================================
echo.

echo 1. Building production site with relative paths...
call npm run build

echo 2. Updating /docs folder for GitHub Pages...
if not exist docs mkdir docs
xcopy /s /e /y dist\* docs\ >nul
echo. > docs\.nojekyll

echo 3. Staging and committing changes...
git add .
git commit -m "fix(github-pages): set relative base path and add compiled docs bundle"

echo 4. Pushing to GitHub...
git push origin main

echo.
echo ====================================================
echo Update complete!
echo ====================================================
pause
