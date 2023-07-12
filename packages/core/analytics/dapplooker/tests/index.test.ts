import {describe, expect, test} from '@jest/globals';
import { DLAnalytics } from '../index';
import fetch from 'node-fetch';


jest.mock('node-fetch');
const { Response } = jest.requireActual('node-fetch');


describe('DappLooker SDK Test', () => {
    test('Happy path testing', async () => {
        (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValue(
            new Response(JSON.stringify([{ count: 70 }]), { status: 200, statusText: 'OK' })
        );

        let baseConfig = {
            apiKey: process.env.API_KEY!,
            env: "test"
        }
        console.log(JSON.stringify(baseConfig));
        let chartUUID = "dc9b69d8-7ca1-45d4-8ad0-a17f915f3f0";
        let dappLookerSDK = new DLAnalytics(baseConfig);
        let response = await dappLookerSDK.getChartData(chartUUID, "json");
        expect(response).toEqual([{ count: 70 }] );
    });
});
