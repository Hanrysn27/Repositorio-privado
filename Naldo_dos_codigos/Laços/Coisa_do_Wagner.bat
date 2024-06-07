@echo off
cls
:menu
chcp 65001
color 1f


echo Sistema de tarefas automáticas
echo.
echo Data Atual: %date%     Hora Atual: %time%
echo.
echo Computador : %computername%    Usuário %username%
echo.
echo ##################################
echo #              menu              #
echo ##################################
echo # 1 - Executar Microsoft word    #
echo # 2 - Abri windows explorer C:   #    
echo # 3 - Abrir Microsoft Store      #
echo # 4 - Exibir arquivos temporários#      
echo # 5 - Executar criaprojeto.bat   # 
echo # 6 -          Sair              #
echo ##################################
echo.

set /p opcao=Escolha a opção:

if %opcao% equ 1 goto opcao1  
if %opcao% equ 2 goto opcao2 
if %opcao% equ 3 goto opcao3 
if %opcao% equ 4 goto opcao4 
if %opcao% equ 5 goto opcao5 
if %opcao% equ 6 goto opcao6


:opcao1 
cls & echo Abrindo o Word
start Word
pause & goto menu

:opcao2 
cls & echo Abrindo o Chrome
start explorer.exe /e, /n,
pause & goto menu

:opcao3 
cls & echo Abrindo Microsoft Store
start ms-windows-store
pause & goto menu

:opcao4 
cls & echo Abrindo arquivos locais
 C:\Windows\Temp
pause & goto menu

:opcao5 
cls & echo Criando Projeto
start C:\Users\hanry.nunes\Downloads
pause & goto menu

:opcao6
cls & echo Saindo
exit




