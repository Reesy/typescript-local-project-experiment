import { IfsWrapper } from "./interfaces/IfsWrapper";
import fs = require('fs');

export class fsWrapper implements IfsWrapper
{
    constructor()
    {

    }


    public readDirectory(directoryPath: string, Log?: boolean): Array<string>
    {
        let fsOutput = fs.readdirSync(directoryPath);

        if(Log){
            console.log('The directory output was: ' + fsOutput);
        }

        return fsOutput;

    }

}