import React from 'react';

abstract class AnalyticsUIInterface {
  protected config: Config;

  constructor(config: Config) {
    if (new.target === AnalyticsUIInterface) {
      throw new Error("Can't instantiate abstract class!");
    }
    this.config = config;
  }

  abstract createComponent(): React.ComponentType<any>;
}

abstract class Config {
  // Define your base config properties here.
}

export { AnalyticsUIInterface, Config };
