import * as libReport from 'istanbul-lib-report';

export declare class Report {
    constructor(opts: {
        exclude?: any,
        include?: any,
        reporter: any[],
        reportsDirectory?: string,
        tempDirectory?: string,
        watermarks?: Partial<libReport.Watermarks>,
        omitRelative?: boolean,
        wrapperLength?: number,
        resolve?: string,
        all?: boolean,
    })

    run(): Promise<void>;
}