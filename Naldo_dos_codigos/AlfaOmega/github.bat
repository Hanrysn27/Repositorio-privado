@echo off
chcp 65001
cls
:menu
echo.
echo Usuário: %username%    Computador: %computername% 
echo Data atual: %date%     Hora atual: %time%
echo.

echo *************************************************
echo ****          Menu Principal                 ****
echo *************************************************
echo **** 1. Clonar repositório GitHub            ****
echo **** 2. Configurar repositório local GitHub  ****
echo **** 3. Resetar configurações locais         ****
echo **** 4. Enviar repositório local para GitHub ****
echo **** 5. Criando estrutura de projeto web     ****
echo **** 6. Sair do menu                         ****
echo *************************************************

set /p opcao=Escolha uma opção: 

if %opcao% equ 1 goto opcao1
if %opcao% equ 2 goto opcao2
if %opcao% equ 3 goto opcao3
if %opcao% equ 4 goto opcao4
if %opcao% equ 5 goto opcao5
if %opcao% equ 6 goto opcao6
if %opcao% geq 7 goto opcao7

:opcao1
cls
echo Clonando repositório...
git clone https://github.com/Hanrysn27/Hanry
echo.
...
cls
pause
goto menu

:opcao2
cls
echo Setando configurações locais
set /p user=Informe seu usuário do github: 
git config --global user.name "%user%"

...

git config --list
pause
cls
goto menu

:opcao3
cls
echo Resetando configurações locais
git config --global --unset user.name
...
git config --list
pause
cls
goto menu

:opcao4
cls
echo Preparando para sincronizar repositório
git status
pause
git add .
set /p mensagem=Informe a mensagem do commit
git commit -m "%mensagem%
git push origin main -f
cls
goto menu

:opcao5
cls
echo Criando novo projeto web
set /p folder=Entre com o nome do projeto: 
md %folder% & cd %folder% & git init
md css js images & type nul > index.html
type nul > css\main.css & type nul > js\script.js
code . index.html

:opcao6
cls
echo Saindo do Menu
cls
exit


:opcao7
cls
echo Opção inválida. Entre com as opções de 1 à 6
pause
cls
goto menu



