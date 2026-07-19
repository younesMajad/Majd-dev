import type { Request, Response, NextFunction } from 'express';
import { ProjectModel } from '../models/Project.js';
import type { ApiResponse, Project } from '../types/index.js';

/**
 * GET /api/projects
 * Retrieve all projects, optionally filtered by category.
 */
export async function getAllProjects(
  req: Request,
  res: Response<ApiResponse<Project[]>>,
  next: NextFunction
): Promise<void> {
  try {
    let projects = await ProjectModel.getAll();

    // Optional query filter: ?category=Design
    const category = req.query.category as string | undefined;
    if (category) {
      projects = projects.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    res.json({ success: true, data: projects });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/projects/:id
 * Retrieve a single project by ID.
 */
export async function getProjectById(
  req: Request<{ id: string }>,
  res: Response<ApiResponse<Project>>,
  next: NextFunction
): Promise<void> {
  try {
    const project = await ProjectModel.getById(req.params.id);
    if (!project) {
      res.status(404).json({ success: false, error: 'Project not found' });
      return;
    }
    res.json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
}

/**
 * POST /api/projects
 * Create a new project.
 */
export async function createProject(
  req: Request,
  res: Response<ApiResponse<Project>>,
  next: NextFunction
): Promise<void> {
  try {
    const project: Project = {
      id: req.body.id || crypto.randomUUID(),
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      longDescription: req.body.longDescription,
      image: req.body.image,
      tags: req.body.tags || [],
      client: req.body.client,
      year: req.body.year,
      link: req.body.link || '#',
      role: req.body.role,
      challenge: req.body.challenge,
      solution: req.body.solution,
    };

    const created = await ProjectModel.create(project);
    res.status(201).json({ success: true, data: created });
  } catch (error) {
    next(error);
  }
}

/**
 * PUT /api/projects/:id
 * Update an existing project.
 */
export async function updateProject(
  req: Request<{ id: string }>,
  res: Response<ApiResponse<Project>>,
  next: NextFunction
): Promise<void> {
  try {
    const updated = await ProjectModel.update(req.params.id, req.body);
    if (!updated) {
      res.status(404).json({ success: false, error: 'Project not found' });
      return;
    }
    res.json({ success: true, data: updated });
  } catch (error) {
    next(error);
  }
}

/**
 * DELETE /api/projects/:id
 * Delete a project by ID.
 */
export async function deleteProject(
  req: Request<{ id: string }>,
  res: Response<ApiResponse<null>>,
  next: NextFunction
): Promise<void> {
  try {
    const deleted = await ProjectModel.delete(req.params.id);
    if (!deleted) {
      res.status(404).json({ success: false, error: 'Project not found' });
      return;
    }
    res.json({ success: true, message: 'Project deleted' });
  } catch (error) {
    next(error);
  }
}
