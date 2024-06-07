@echo off
cls
chcp 65001
:menu
color 00
echo Sistema de Tarefas automáticas
echo.  
echo Data atual: %date%     Hora atual: %time%
echo.
echo  Computador: %computername%       Usuário: %username%
echo.
echo ###################################
echo ##           Menu                ##
echo ###################################
echo # 1 - Executar Microsoft Word     #
echo # 2 - Abrir o Windows Explorer C: #
echo # 3 - Executar Microsoft Store    #
echo # 4 - Exibir arquivo temporários  #
echo # 5 - Executar criaprojeto.bat    #
echo # 6 - Sair                        #
echo ###################################
echo.

set /p opcao=Escolha a opção: 

if %opcao% equ 1 goto opcao1
if %opcao% equ 2 goto opcao2
if %opcao% equ 3 goto opcao3
if %opcao% equ 4 goto opcao4
if %opcao% equ 5 goto opcao5
if %opcao% geq 6 goto opcao6

:opcao1
cls 
echo Executar Microsoft Word
start Word & pause & goto menu 

:opcao2
cls
echo Abrir O Windows Explorer C:
control
explorer.exe /e,/n,
pause
goto Menu

:opcao3
cls & echo Executar Microsoft Store 
ms-windows-store
pause
goto Menu

:opcao4
cls & echo abrindo arquivos temporarios
start C:\Windows\Temp

:opcao5
cls & echo criando projeto
start C:\Users\hanry.nunes\Downloads\criaprojeto.bat

:opcao6
cls & echo Opção inválida. Escolha outra
pause & E:\criaprojeto
goto menu