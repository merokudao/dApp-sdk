import ChartConstants from "./ChartConstants";
import fetch from "node-fetch";
import AnalyticsBase from "../../../abstract/AnalyticsBase";
import baseConfig from "../../../../config/BaseConfig";


export class DappLookerChartsAPI extends AnalyticsBase{
    constructor(config: baseConfig) {
        super(config);
    }
    async getChartData(chartIdentifier: string, format: string) {
        const oThis = this;
        let outputFormat = format?.toLowerCase();
        try {
            if ((outputFormat !== undefined && ChartConstants.supportedFormatType.includes(outputFormat)) || outputFormat === undefined) {
                let chartAPIUrl = ChartConstants.getChartDetailUrl;
                let fullAPIUrl = `${chartAPIUrl}/${chartIdentifier}?api_key=${oThis.config.apiKey}&output_format=${format}`;
                console.log(`Calling DappLooker API: ${fullAPIUrl}`);
                let resObject = await fetch(fullAPIUrl);
                const successResponseCode = [200, 201, 202, 203, 204];
                if (successResponseCode.includes(resObject.status)) {
                    return await resObject.json();
                } else {
                    let errorDetails = await resObject.text();
                    return {
                        msg: `Failed to get response from DappLooker API, error code: ${resObject.status}, error: ${errorDetails}`
                    };
                }

            } else {
                return {
                    msg: "Output format Incorrect!! Please use output format as json",
                    outputFormatEntered: format,
                };
            }
        } catch (e: any){
            return {
                msg: `Exception getting result from DappLooker API, ${e.message}`,
            };
        }
    }
}
