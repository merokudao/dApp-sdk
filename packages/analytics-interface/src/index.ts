import BaseConfig from "../../config/BaseConfig";

abstract class AnalyticsInterface {

  protected config: BaseConfig;

  protected constructor(config: BaseConfig) {
    if (this.constructor === AnalyticsInterface) {
      throw new Error("Can't instantiate abstract class!");
    }
    this.config = config;
  }

  abstract getChartData(chartIdentifier: string, format: string): void;
}

export default AnalyticsInterface;
