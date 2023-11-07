import { errors } from '@strapi/utils';
import type { Webhook } from '@strapi/types';

/**
 * /webhooks - GET all webhooks
 */
export declare namespace GetWebhooks {
  export interface Request {
    body: {};
    query: {};
  }

  export interface Response {
    data: Webhook[];
    error?: errors.ApplicationError;
  }
}

/**
 * /webhooks/:id - GET a webhook
 */
export declare namespace GetWebhook {
  export interface Request {
    body: {};
    query: {};
  }

  export interface Params {
    id: string;
  }

  export interface Response {
    data: Webhook;
    error?: errors.ApplicationError;
  }
}

/**
 * /webhooks - Create (POST) a webhook
 */
export declare namespace CreateWebhook {
  export interface Request {
    body: Webhook;
    query: {};
  }

  export interface Response {
    data: Webhook;
    error?: errors.ApplicationError | errors.YupValidationError;
  }
}

/**
 * /webhoooks/:id - PUT (update) a webhook
 */
export declare namespace UpdateWebhook {
  export interface Request {
    body: Partial<Webhook>;
    query: {};
  }

  export interface Params {
    id: string;
  }

  export interface Response {
    data: Webhook;
    error?: errors.ApplicationError | errors.YupValidationError;
  }
}

/**
 * /webhooks/:id - Delete a webhook
 */
export declare namespace DeleteWebhook {
  export interface Request {
    body: {};
    query: {};
  }

  export interface Params {
    id: string;
  }

  export interface Response {
    data: Webhook;
    error?: errors.ApplicationError;
  }
}

/**
 * /webhooks/batch-delete - Delete multiple webhooks
 */
export declare namespace DeleteWebhooks {
  export interface Request {
    body: {
      ids: string[];
    };
    query: {};
  }

  export interface Response {
    data: {};
    error?: errors.ApplicationError;
  }
}

/**
 * /triggerWebhook - Trigger a webhook
 */
export declare namespace TriggerWebhook {
  export interface Request {
    body: {};
    query: {};
  }

  export interface Params {
    id: string;
  }

  export interface Response {
    data: {
      statusCode: number;
      message?: string;
    };
    error?: errors.ApplicationError;
  }
}
