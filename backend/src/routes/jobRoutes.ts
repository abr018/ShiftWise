import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json([
    {
      title: "Frontend Developer",
      location: "Remote • Lisboa",
      skills: ["React", "TypeScript"],
      experienceYears: 2,
    },
    {
      title: "Backend Developer",
      location: "Remote • Porto",
      skills: ["Node.js", "MariaDB"],
      experienceYears: 3,
    },
  ]);
});

export default router;