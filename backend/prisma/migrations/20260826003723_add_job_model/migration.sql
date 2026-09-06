-- CreateTable
CREATE TABLE `job` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `recruiterId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `experienceYears` INTEGER NOT NULL DEFAULT 0,
    `skills` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `job` ADD CONSTRAINT `job_recruiterId_fkey` FOREIGN KEY (`recruiterId`) REFERENCES `recruiter`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
