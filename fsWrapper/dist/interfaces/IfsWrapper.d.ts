export interface IfsWrapper {
    readDirectory(directoryName: string, log?: boolean): Array<string>;
}
