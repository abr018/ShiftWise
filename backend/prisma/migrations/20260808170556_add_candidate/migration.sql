-- CreateTable
CREATE TABLE `candidate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `experienceYears` INTEGER NOT NULL DEFAULT 0,
    `skills` VARCHAR(191) NOT NULL,
    `bio` VARCHAR(191) NULL,

    UNIQUE INDEX `candidate_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `candidate` ADD CONSTRAINT `candidate_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
