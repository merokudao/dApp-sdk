import { DappLookerChartsAPI } from "dapplooker-sdk";

import AnalyticsBase from "../../abstract/AnalyticsBase";
import baseConfig from "../../../config/BaseConfig";


export class DLAnalytics extends AnalyticsBase {
    constructor(config: baseConfig) {
        super(config);
    }

    async getChartData(chartIdentifier: string, format: string) {
        const oThis = this;
        let response = await DappLookerChartsAPI.getChartData(chartIdentifier, oThis.config.apiKey!, format);
        console.log("Chart API Data: ", JSON.stringify(response));
        return response;
    }
}
