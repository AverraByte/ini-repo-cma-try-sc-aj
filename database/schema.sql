-- Buat database jika belum ada
CREATE DATABASE IF NOT EXISTS gameserver_hosting;
USE gameserver_hosting;

-- Tabel Users
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  fullName VARCHAR(100),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabel Game Servers
CREATE TABLE IF NOT EXISTS game_servers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  game VARCHAR(50) NOT NULL,
  hostname VARCHAR(255) NOT NULL,
  port INT NOT NULL,
  status ENUM('online', 'offline', 'restarting') DEFAULT 'offline',
  currentPlayers INT DEFAULT 0,
  maxPlayers INT NOT NULL,
  location VARCHAR(50),
  cpuUsage FLOAT DEFAULT 0,
  ramUsage INT DEFAULT 0, -- in MB
  diskUsage INT DEFAULT 0, -- in MB
  uptime FLOAT DEFAULT 0, -- percentage
  userId INT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
);

-- Tabel Server Activities
CREATE TABLE IF NOT EXISTS server_activities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  serverId INT NOT NULL,
  action VARCHAR(100) NOT NULL,
  details TEXT,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (serverId) REFERENCES game_servers(id) ON DELETE CASCADE
);

-- Data Contoh untuk Testing
-- User
INSERT INTO users (username, email, password, fullName)
VALUES ('rans', 'rans@rans.com', '@Rans#2025!', 'Rans Permana');

-- Game Servers
INSERT INTO game_servers (name, game, hostname, port, status, currentPlayers, maxPlayers, location, cpuUsage, ramUsage, diskUsage, uptime, userId)
VALUES 
('Survival World', 'Minecraft', 'mc.example.com', 25565, 'online', 24, 100, 'New York', 35.2, 4096, 15360, 99.95, 1),
('Rust Community', 'Rust', 'rust.example.com', 28015, 'online', 86, 150, 'Frankfurt', 65, 8192, 30720, 99.8, 1),
('Valheim Vikings', 'Valheim', 'valheim.example.com', 2456, 'online', 8, 10, 'London', 28.4, 4096, 10240, 99.9, 1),
('ARK Survival', 'ARK', 'ark.example.com', 7777, 'restarting', 0, 70, 'Singapore', 0, 0, 0, 98.5, 1);

-- Server Activities
INSERT INTO server_activities (serverId, action, details, timestamp)
VALUES
(4, 'Server restart initiated', 'Scheduled restart for ARK server', NOW() - INTERVAL 5 MINUTE),
(2, 'Player count increased', 'Rust server reached 80+ concurrent players', NOW() - INTERVAL 2 HOUR),
(1, 'Configuration updated', 'Updated server.properties file', NOW() - INTERVAL 1 DAY),
(3, 'Backup completed', 'Automatic backup completed successfully', NOW() - INTERVAL 2 DAY);
