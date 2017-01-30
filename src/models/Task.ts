class Task {
    public id: number;
    public name: string;
    public done: boolean;

    constructor(id: number,
                name: string,
                done: boolean
                )
    {
        this.id = id;
        this.name = name;
        this.done = done;
    };
}

export default Task;
/*

 tasks: [
 {
 id: 1,
 name: "ContactList Example",
 done: true
 },
 {
 id: 2,
 name: "Kanban Example",
 done: false
 },
 {
 id: 3,
 name: "My own experiments",
 done: false
 }
 ]

 */