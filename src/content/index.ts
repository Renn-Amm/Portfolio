/* =============================================================
   Content entry point. Components import from here.
   You normally only edit the files next to this one;
   the helpers below are derived automatically.
   ============================================================= */
import { projects, smallProjects } from "./projects";
import { skillGroups } from "./skills";
import { tracks } from "./work";
import type { Project, Track } from "../types";
 
export { profile } from "./profile";
export { skillGroups } from "./skills";
export { experience, education } from "./experience";
export { projects, smallProjects } from "./projects";
export { tracks, workText } from "./work";
export { contactText } from "./contact";
 
/** skill id → display label, e.g. "react" → "React" */
export const skillLabel: Record<string, string> = Object.fromEntries(
  skillGroups.flatMap((g) => g.items.map((s) => [s.id, s.label])),
);
 
/** project id → project */
export const projectById: Record<string, Project> = Object.fromEntries(projects.map((p) => [p.id, p]));
 
/** How many projects / small projects / case studies use a skill. */
export function skillUsage(skillId: string): number {
  const everything = [...projects, ...smallProjects, ...tracks.flatMap((t) => t.cases)];
  return everything.filter((item) => item.stack.includes(skillId)).length;
}
 
/** The first Work tab that contains something using this skill. */
export function trackForSkill(skillId: string): Track | undefined {
  return tracks.find(
    (t) =>
      t.projects.some((id) => projectById[id]?.stack.includes(skillId)) ||
      t.cases.some((c) => c.stack.includes(skillId)) ||
      (t.showSmallProjects && smallProjects.some((s) => s.stack.includes(skillId))),
  );
}