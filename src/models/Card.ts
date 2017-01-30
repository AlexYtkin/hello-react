import Task from "./Task";
class Card {
    public id: number;
    public title: string;
    public description: string;
    public status: string;
    public tasks: Array<Task>;

    constructor(id: number,
                title: string,
                description: string,
                status: string,
                tasks: Array<Task>)
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.tasks = tasks;
    };

}

export default Card;