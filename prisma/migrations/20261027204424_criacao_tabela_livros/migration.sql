/*
  Warnings:

  - A unique constraint covering the columns `[cod_usuario]` on the table `Alunos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cod_usuario` to the `Alunos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `Alunos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alunos` ADD COLUMN `cod_usuario` VARCHAR(191) NOT NULL,
    ADD COLUMN `senha` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Livros` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `autor` VARCHAR(191) NOT NULL,
    `paginas` INTEGER NOT NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Alunos_cod_usuario_key` ON `Alunos`(`cod_usuario`);
