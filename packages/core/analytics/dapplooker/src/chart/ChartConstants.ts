
class ChartConstants {
    public get supportedFormatType(): string[] {
        return ["json"];
    }

    public get getChartDetailUrl(): string {
        return `https://api.dapplooker.com/chart`;
    }
}

export default new ChartConstants();
