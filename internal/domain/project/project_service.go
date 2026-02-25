package project

import "context"

type IProjectService interface {
	GetProject(ctx context.Context, param *Project) (*Project, error)
	CreateProject(ctx context.Context, param *Project) error
}

type ProjectService struct {
	ProjectRepo IProjectRepository
}

func NewProjectService(prepo IProjectRepository) IProjectService {
	return &ProjectService{
		ProjectRepo: prepo,
	}
}

func (ps *ProjectService) GetProject(ctx context.Context, param *Project) (*Project, error) {
	return ps.ProjectRepo.GetProject(ctx, param)
}

func (ps *ProjectService) CreateProject(ctx context.Context, param *Project) error {
	return ps.ProjectRepo.CreateProject(ctx, param)
}
