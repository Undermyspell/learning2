import { Injectable } from '@nestjs/common';
import { readdirSync } from "fs";
import { join } from "path";


@Injectable()
export class ImagesService {

    getImageNames(): string[] {
        const filenames: string[] = [];
        const directoryPath: string = join(__dirname, "../..", "static/images");
        const files = readdirSync(directoryPath);
        files.filter(file => file.match(/\.(svg|png|jpg|gif|svg)$/)).forEach(function (file) {
            filenames.push(file);
        });

        return filenames;
    }
}
