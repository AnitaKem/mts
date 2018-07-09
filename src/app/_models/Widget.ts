import { Photo } from "./Photo";

export class Widget{
    avatars: Array<Photo>;
    followers: Array<Photo>;
    header: string;
    followersCount: number;
    isFavourite: boolean;
    creator: string;

    constructor(data?){
        if(data){
            this.avatars = data.avatars;
            this.followers = data.followers;
            this.header = data.header;
            this.followersCount = data.followersCount;
            this.isFavourite = data.isFavourite;
            this.creator = data.creator;
        }
    }
}