export interface ICerebra {
    cerebraName: string;
    cerebraCreator: string;
    cerebraDescription: string;
    cerebraTasks: string;
    cerebraTags: string;
    cerebraLikes: number;
}

export class Cerebra implements ICerebra {
    constructor(
        public cerebraName: string,
        public cerebraCreator: string,
        public cerebraDescription: string,
        public cerebraTasks: string,
        public cerebraSubtasks: string,
        public cerebraTags: string,
        public cerebraLikes: number
    ){
			
    }
}
