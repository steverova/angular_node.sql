USE [master]
GO
/****** Object:  Database [person]    Script Date: 01/09/2022 09:41 pm ******/
CREATE DATABASE [person]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'person', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\person.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'person_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\person_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [person] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [person].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [person] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [person] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [person] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [person] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [person] SET ARITHABORT OFF 
GO
ALTER DATABASE [person] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [person] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [person] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [person] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [person] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [person] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [person] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [person] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [person] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [person] SET  ENABLE_BROKER 
GO
ALTER DATABASE [person] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [person] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [person] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [person] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [person] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [person] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [person] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [person] SET RECOVERY FULL 
GO
ALTER DATABASE [person] SET  MULTI_USER 
GO
ALTER DATABASE [person] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [person] SET DB_CHAINING OFF 
GO
ALTER DATABASE [person] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [person] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [person] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [person] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'person', N'ON'
GO
ALTER DATABASE [person] SET QUERY_STORE = OFF
GO
USE [person]
GO
/****** Object:  Table [dbo].[tb_person]    Script Date: 01/09/2022 09:41 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tb_person](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NULL,
	[apellido] [varchar](50) NULL,
	[cedula] [varchar](50) NULL
) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [dbo].[Add_Person]    Script Date: 01/09/2022 09:41 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[Add_Person]  
(  
@nombre varchar(50),  
@apellido varchar(50),  
@cedula varchar(50)    
)  
AS  
BEGIN  
insert into tb_person (nombre,apellido,cedula) values( @nombre, @apellido, @cedula)  
END  
GO
/****** Object:  StoredProcedure [dbo].[Delete_Person]    Script Date: 01/09/2022 09:41 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[Delete_Person]  
(  
@id int  
)  
AS  
BEGIN  
delete from tb_person where id=@id  
END 
GO
/****** Object:  StoredProcedure [dbo].[Update_Person]    Script Date: 01/09/2022 09:41 pm ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE procedure [dbo].[Update_Person]  
(  
@id int,
@nombre varchar(50),  
@apellido varchar(50),  
@cedula varchar(50)    
)  
AS  
BEGIN  
UPDATE tb_person 
SET nombre = @nombre, apellido = @apellido, cedula = @cedula
where id = @id; 
END
GO
USE [master]
GO
ALTER DATABASE [person] SET  READ_WRITE 
GO
