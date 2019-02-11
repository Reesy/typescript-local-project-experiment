import { IfsWrapper } from "./interfaces/IfsWrapper";
export declare class fsWrapper implements IfsWrapper {
    constructor();
    readDirectory(directoryPath: string, Log?: boolean): Array<string>;
}
