-- Script para limpar constraints problemáticas no banco ProSigaDb

USE [ProSigaDb]
GO

-- Desabilitar integridade referencial temporariamente
ALTER DATABASE ProSigaDb SET SINGLE_USER WITH ROLLBACK IMMEDIATE
GO
ALTER DATABASE ProSigaDb SET MULTI_USER
GO

-- Dropar todas as tabelas para começar do zero (mais seguro)
DROP TABLE IF EXISTS [dbo].[tblSubmit] CASCADE
GO
DROP TABLE IF EXISTS [dbo].[tblUserPermission] CASCADE
GO
DROP TABLE IF EXISTS [dbo].[tblActivities] CASCADE
GO
DROP TABLE IF EXISTS [dbo].[tblSubject] CASCADE
GO
DROP TABLE IF EXISTS [dbo].[tblClass] CASCADE
GO
DROP TABLE IF EXISTS [dbo].[tblPermissios] CASCADE
GO
DROP TABLE IF EXISTS [dbo].[tblUser] CASCADE
GO

-- Confirmar que as tabelas foram deletadas
SELECT * FROM information_schema.TABLES WHERE TABLE_SCHEMA = 'dbo'
GO
