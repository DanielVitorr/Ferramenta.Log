export default class KanbanAPI {
    static getItem(columnId) {
        const column = read().find(column => column.id == columnid);

        if(!column){
            return[];
        }

        return column.itens;
    }
}

function read() {
    const json = localStorage.getItem("kanban-data");

    if(!json) {
        return [
            {    
                id:1,
                itens: []
            },
            {    
                id:2,
                itens: []
            },
            {    
                id:3,
                itens: []
            },
            {    
                id:4,
                itens: []
            },
        ];
    }

    return JSON.parse(json);
}

function save(data) {
    localStorage.setItem("Kanban-data",JSON.stringify(data));
}


