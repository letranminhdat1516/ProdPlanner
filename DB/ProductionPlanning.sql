-- Tạo cơ sở dữ liệu ProductionPlanning
USE [master]
GO
IF DB_ID('ProductionPlanning') IS NOT NULL
    DROP DATABASE [ProductionPlanning];
GO
CREATE DATABASE [ProductionPlanning]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ProductionPlanning', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\ProductionPlanning.mdf', SIZE = 8192KB, MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ProductionPlanning_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\ProductionPlanning_log.ldf', SIZE = 8192KB, MAXSIZE = 2048GB, FILEGROWTH = 65536KB );
GO

-- Thiết lập cài đặt cho cơ sở dữ liệu
ALTER DATABASE [ProductionPlanning] SET COMPATIBILITY_LEVEL = 160;
GO
ALTER DATABASE [ProductionPlanning] SET RECOVERY SIMPLE;
GO
ALTER DATABASE [ProductionPlanning] SET MULTI_USER;
GO
ALTER DATABASE [ProductionPlanning] SET PAGE_VERIFY CHECKSUM;
GO
USE [ProductionPlanning];
GO

-- Tạo bảng demand_forecast
CREATE TABLE [dbo].[demand_forecast] (
    [forecast_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [product_id] INT NULL,
    [forecasted_quantity] INT NULL,
    [forecast_date] DATE NULL
);
GO

-- Tạo bảng inventory
CREATE TABLE [dbo].[inventory] (
    [material_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [material_name] NVARCHAR(255) NULL,
    [quantity_in_stock] INT NULL,
    [minimum_required] INT NULL
);
GO

-- Tạo bảng machines
CREATE TABLE [dbo].[machines] (
    [machine_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [machine_name] NVARCHAR(255) NULL,
    [status] NVARCHAR(50) DEFAULT 'Available' NULL
);
GO

-- Tạo bảng payroll
CREATE TABLE [dbo].[payroll] (
    [payroll_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [worker_id] INT NOT NULL,
    [pay_date] DATE NOT NULL,
    [total_hours] DECIMAL(5, 2) NOT NULL,
    [hourly_rate] DECIMAL(10, 2) NOT NULL,
    [total_pay] DECIMAL(10, 2) NOT NULL
);
GO

-- Tạo bảng production_capacity
CREATE TABLE [dbo].[production_capacity] (
    [capacity_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [machine_name] NVARCHAR(255) NULL,
    [available_hours] INT NULL,
    [capacity_per_hour] INT NULL,
    [machine_id] INT NULL
);
GO

-- Tạo bảng production_plan
CREATE TABLE [dbo].[production_plan] (
    [plan_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [product_id] INT NULL,
    [start_date] DATE NULL,
    [end_date] DATE NULL,
    [quantity] INT NULL,
    [status] NVARCHAR(50) DEFAULT 'Planned' NULL,
    [order_id] INT NULL,
    [progress] INT DEFAULT 0 NULL
);
GO

-- Tạo bảng products
CREATE TABLE [dbo].[products] (
    [product_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [product_name] NVARCHAR(255) NULL
);
GO

-- Tạo bảng purchase_orders
CREATE TABLE [dbo].[purchase_orders] (
    [po_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [supplier_id] INT NULL,
    [material_id] INT NULL,
    [quantity] INT NULL,
    [order_date] DATE NULL,
    [status] NVARCHAR(50) DEFAULT 'Ordered' NULL
);
GO

-- Tạo bảng purchase_plan
CREATE TABLE [dbo].[purchase_plan] (
    [plan_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [material_id] INT NOT NULL,
    [planned_quantity] INT NOT NULL,
    [due_date] DATE NOT NULL,
    [status] VARCHAR(50) DEFAULT 'Planned' NULL
);
GO

-- Tạo bảng resource_allocation
CREATE TABLE [dbo].[resource_allocation] (
    [allocation_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [plan_id] INT NULL,
    [machine_id] INT NULL,
    [worker_id] INT NULL,
    [material_id] INT NULL,
    [quantity_allocated] INT NULL
);
GO

-- Tạo bảng sales_orders
CREATE TABLE [dbo].[sales_orders] (
    [order_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [customer_name] NVARCHAR(255) NULL,
    [product_id] INT NULL,
    [quantity] INT NULL,
    [order_date] DATE NULL,
    [status] NVARCHAR(50) DEFAULT 'Pending' NULL
);
GO

-- Tạo bảng suppliers
CREATE TABLE [dbo].[suppliers] (
    [supplier_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [supplier_name] NVARCHAR(255) NULL,
    [contact_info] NVARCHAR(255) NULL
);
GO

-- Tạo bảng supply_chain_plan
CREATE TABLE [dbo].[supply_chain_plan] (
    [plan_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [supplier_id] INT NOT NULL,
    [product_id] INT NOT NULL,
    [plan_date] DATE NOT NULL,
    [quantity] INT NOT NULL,
    [delivery_date] DATE NULL,
    [status] VARCHAR(50) NULL
);
GO

-- Tạo bảng time_logs
CREATE TABLE [dbo].[time_logs] (
    [log_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [worker_id] INT NOT NULL,
    [log_date] DATE NOT NULL,
    [hours_worked] DECIMAL(5, 2) NOT NULL
);
GO

-- Tạo bảng training_sessions
CREATE TABLE [dbo].[training_sessions] (
    [session_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [session_name] VARCHAR(255) NOT NULL,
    [session_date] DATE NOT NULL,
    [worker_id] INT NOT NULL,
    [description] TEXT NULL
);
GO

-- Tạo bảng workers
CREATE TABLE [dbo].[workers] (
    [worker_id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    [worker_name] NVARCHAR(255) NULL,
    [skill_level] NVARCHAR(50) NULL
);
GO

-- Thiết lập khóa ngoại (Foreign Key Constraints)
ALTER TABLE [dbo].[demand_forecast] ADD FOREIGN KEY ([product_id]) REFERENCES [dbo].[products] ([product_id]);
GO
ALTER TABLE [dbo].[payroll] ADD FOREIGN KEY ([worker_id]) REFERENCES [dbo].[workers] ([worker_id]);
GO
ALTER TABLE [dbo].[production_capacity] ADD FOREIGN KEY ([machine_id]) REFERENCES [dbo].[machines] ([machine_id]);
GO
ALTER TABLE [dbo].[production_plan] ADD FOREIGN KEY ([order_id]) REFERENCES [dbo].[sales_orders] ([order_id]);
GO
ALTER TABLE [dbo].[production_plan] ADD FOREIGN KEY ([product_id]) REFERENCES [dbo].[products] ([product_id]);
GO
ALTER TABLE [dbo].[purchase_orders] ADD FOREIGN KEY ([material_id]) REFERENCES [dbo].[inventory] ([material_id]);
GO
ALTER TABLE [dbo].[purchase_orders] ADD FOREIGN KEY ([supplier_id]) REFERENCES [dbo].[suppliers] ([supplier_id]);
GO
ALTER TABLE [dbo].[purchase_plan] ADD FOREIGN KEY ([material_id]) REFERENCES [dbo].[inventory] ([material_id]);
GO
ALTER TABLE [dbo].[resource_allocation] ADD FOREIGN KEY ([machine_id]) REFERENCES [dbo].[machines] ([machine_id]);
GO
ALTER TABLE [dbo].[resource_allocation] ADD FOREIGN KEY ([material_id]) REFERENCES [dbo].[inventory] ([material_id]);
GO
ALTER TABLE [dbo].[resource_allocation] ADD FOREIGN KEY ([plan_id]) REFERENCES [dbo].[production_plan] ([plan_id]);
GO
ALTER TABLE [dbo].[resource_allocation] ADD FOREIGN KEY ([worker_id]) REFERENCES [dbo].[workers] ([worker_id]);
GO
ALTER TABLE [dbo].[sales_orders] ADD FOREIGN KEY ([product_id]) REFERENCES [dbo].[products] ([product_id]);
GO
ALTER TABLE [dbo].[supply_chain_plan] ADD FOREIGN KEY ([product_id]) REFERENCES [dbo].[products] ([product_id]);
GO
ALTER TABLE [dbo].[supply_chain_plan] ADD FOREIGN KEY ([supplier_id]) REFERENCES [dbo].[suppliers] ([supplier_id]);
GO
ALTER TABLE [dbo].[time_logs] ADD FOREIGN KEY ([worker_id]) REFERENCES [dbo].[workers] ([worker_id]);
GO
ALTER TABLE [dbo].[training_sessions] ADD FOREIGN KEY ([worker_id]) REFERENCES [dbo].[workers] ([worker_id]);
GO

-- Thêm dữ liệu mẫu
-- Thêm dữ liệu cho bảng products
INSERT INTO [dbo].[products] (product_name) VALUES ('Product A'), ('Product B'), ('Product C');
GO

-- Thêm dữ liệu cho bảng suppliers
INSERT INTO [dbo].[suppliers] (supplier_name, contact_info) VALUES ('Supplier 1', '1234 Street, City'), ('Supplier 2', '5678 Avenue, City');
GO

-- Thêm dữ liệu cho bảng inventory
INSERT INTO [dbo].[inventory] (material_name, quantity_in_stock, minimum_required) VALUES ('Steel', 1000, 200), ('Aluminum', 500, 100), ('Plastic', 3000, 500);
GO

-- Thêm dữ liệu cho bảng machines
INSERT INTO [dbo].[machines] (machine_name, status) VALUES ('Machine A', 'Available'), ('Machine B', 'In Maintenance');
GO

-- Thêm dữ liệu cho bảng workers
INSERT INTO [dbo].[workers] (worker_name, skill_level) VALUES ('User A', 'Expert'), ('Jane Doe', 'Intermediate');
GO

-- Thêm dữ liệu cho bảng sales_orders
INSERT INTO [dbo].[sales_orders] (customer_name, product_id, quantity, order_date, status) VALUES ('Customer 1', 1, 100, '2024-09-01', 'Pending'), ('Customer 2', 2, 50, '2024-09-02', 'Shipped');
GO

-- Thêm dữ liệu cho bảng purchase_orders
INSERT INTO [dbo].[purchase_orders] (supplier_id, material_id, quantity, order_date, status) VALUES (1, 1, 500, '2024-09-01', 'Ordered'), (2, 2, 300, '2024-09-03', 'Shipped');
GO

-- Thêm dữ liệu cho bảng production_plan
INSERT INTO [dbo].[production_plan] (product_id, start_date, end_date, quantity, status, order_id, progress) VALUES (1, '2024-09-05', '2024-09-10', 100, 'Planned', 1, 50), (2, '2024-09-07', '2024-09-12', 50, 'Planned', 2, 30);
GO

-- Thêm dữ liệu cho bảng time_logs
INSERT INTO [dbo].[time_logs] (worker_id, log_date, hours_worked) VALUES (1, '2024-09-10', 8), (2, '2024-09-10', 6);
GO

-- Thêm dữ liệu cho bảng payroll
INSERT INTO [dbo].[payroll] (worker_id, pay_date, total_hours, hourly_rate, total_pay) VALUES (1, '2024-09-15', 40, 20.00, 800.00), (2, '2024-09-15', 35, 18.50, 647.50);
GO
