import chalk from 'chalk';

import { VersionRange, createCodemodsLoader } from '../../core/codemods';
import { createLogger } from '../../core/logger';
import { loadPkg } from '../../core/pkg';
import { createVersionParser } from '../../core/version';
import { handleError } from '../errors';

import { createLogger } from '../../core';

import type { CLIOptions } from '../../types';

export const upgrade = async (options: CLIOptions) => {
  try {
    const logger = createLogger({ silent: options.silent, debug: options.debug });

    logger.warn(
      "Please make sure you've created a backup of your codebase and files before upgrading"
    );

    await tasks.upgrade({
      logger,
      confirm,
      dryRun: options.dryRun,
      cwd: options.projectPath,
      target: options.target,
      exact: options.exact,
    });
  } catch (err) {
    handleError(err);
  }
};

const confirm = async (message: string) => {
  const { confirm } = await prompts({
    name: 'confirm',
    type: 'confirm',
    message,
  });

  // If confirm is undefined (Ctrl + C), default to false
  return confirm ?? false;
};
