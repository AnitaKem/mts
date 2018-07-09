export class Photo{
    url: string;
    isRound: boolean;

    constructor(data?){
        if(data){
            this.url = data.url;
            this.isRound = data.isRound;
        }
    }
}