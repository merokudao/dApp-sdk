import BaseConfig from "../../config/BaseConfig";

abstract class AnalyticsBase {
    protected config: BaseConfig;

    protected constructor(config: BaseConfig) {
        this.config = config;
    }

    abstract getChartData(chartIdentifier: string, format: string): void;
}

export default AnalyticsBase;
