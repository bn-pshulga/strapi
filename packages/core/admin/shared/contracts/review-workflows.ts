import { errors } from '@strapi/utils';
import { Entity, Permission } from './shared';

export interface StagePermission
  extends Omit<Permission, 'createdAt' | 'updatedAt' | 'properties' | 'conditions'> {
  role: number;
}

interface Stage extends Entity {
  color: string;
  name: string;
  permissions?: StagePermission[];
}

interface Workflow extends Entity {
  name: string;
  contentTypes: string[];
  stages: Stage[];
}

namespace GetAll {
  export interface Request {
    body: {};
    query: {};
  }

  export interface Response {
    data: Workflow[];
    meta?: { workflowCount: number };
    error?: errors.ApplicationError;
  }
}

namespace Get {
  export interface Request {
    body: {};
    query: {};
  }

  export interface Params {
    id: Entity['id'];
  }

  export interface Response {
    data: Workflow;
    error?: errors.ApplicationError;
  }
}

namespace Update {
  export interface Request {
    body: Partial<Workflow>;
    query: {};
  }

  export interface Params {
    id: Entity['id'];
  }

  export interface Response {
    data: Workflow;
    error?: errors.ApplicationError;
  }
}

namespace Create {
  export interface Request {
    body: Workflow;
    query: {};
  }

  export interface Response {
    data: Workflow;
    error?: errors.ApplicationError;
  }
}

namespace Delete {
  export interface Request {
    body: {};
    query: {};
  }

  export interface Params {
    id: Entity['id'];
  }

  export interface Response {
    data: Workflow;
    error?: errors.ApplicationError;
  }
}

export { Stage, Workflow, GetAll, Get, Update, Create, Delete };
