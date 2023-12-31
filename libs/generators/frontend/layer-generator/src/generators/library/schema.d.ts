export type Layer =
  | 'app'
  | 'page'
  | 'widget'
  | 'feature'
  | 'shared'
  | 'repository'
  | 'core'
  | 'ui'
  | 'model';
export type ProjectType =
  | 'photographer'
  | 'client'
  | 'admin'
  | 'landing'
  | 'shared'
export interface LibraryGeneratorSchema {
  name: string;
  layer: Layer;
  projectType: ProjectType;
  directory?: string;
}
