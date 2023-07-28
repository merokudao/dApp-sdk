import { DappLookerChartsAPI } from "dapplooker-sdk";
import AnalyticsInterface from "@dapp-sdk/analytics-interface";

import baseConfig from "../../config/BaseConfig";

/**
 * The `DLAnalytics` class provides an interface for interacting with the DappLooker Charts API.
 *
 * @export
 * @class DLAnalytics
 */
export class DLAnalytics extends AnalyticsInterface {
    
    /**
     * Creates a new instance of the `DLAnalytics` class.
     *
     * @param config The configuration object for the DappLooker Charts API.
     */
    constructor(config: baseConfig) {
        super(config);
    }

    /**
     * Gets specific Chart data from the DappLooker Chart API.
     *
     * @param chartIdentifier A Chart UUID of the chart to get data for chart.
     * @param format The output format of the chart data to return.
     * @returns A promise that resolves with the chart data response.
     */
    async getChartData(chartIdentifier: string, format: string) {
        const oThis = this;
        let response = await DappLookerChartsAPI.getChartData(chartIdentifier, oThis.config.apiKey!, format);
        console.log("Chart API Data: ", JSON.stringify(response));
        return response;
    }
}
