import { Module } from '@nestjs/common';
const { db } = require("../../database/models/post.provider");
@Module({
    imports: [db],
    exports: [db],
})
export class DatabaseModule { }