export default class KanbanAPI {
    static getItem(columnId) {
        const column = read().find(column => column.id == columnId);

        if(!column){
            return[];
        }

        return column.items;
    }

    static insertItem(columnId,content) {
        const data = read();
        const column = data.find(column => column.id == columnId);
        const item = {
            id: Math.floor(Math.random() *1000000 ),
            content: content
        };

        if(!column) {
            throw new Error("Essa coluna não existe!");
        }

        column.items.push(item);
        save(data);

        return item;
    }

    static updateItem(itemId, newProps) {
        const data = read();
        const [item, currentColumn] = (() => 
        {
            for (const column of data) {
                const item = column.items.find(item => item.id == itemId);
                
                if (item){
                    return[item,column];
                }
            }
        })();

        if (!item){
            throw new Error("Item não encontrado");
        }
        
        item.content = newProps.content === undefined ? item.content : newProps.content ;

        // atualizar coluna r posição 
        if(
            newProps.columnId !== undefined
            && newProps.position !== undefined
        ) {
            const targetColumn = data.find(column => columnId == newProps.columnId);

            if (!targetColumn) {
                throw new Error ("Target not found.");
            }

            //delerar o item da coluna que tá
            currentColumn.items.splice(currentColumn.items.indexOf(item),1);

            //mover o item para a coluna nova e posição 
            targetColumn.items.splice(newProps.position,0, item);
        } 

        save(data);
    }

    static deleteItem(itemId) {
        const data = read();

        for (const column of data ) {
            const item = column.itens.find(item => item.id == itemId);

            if(item){
                column.items.splice(column.items.indexOf(item),1);
            }
        }

        save(data);
    }
}

function read() {
    const json = localStorage.getItem("kanban-data");

    if(!json) {
        return [
            {    
                id:1,
                items: []
            },
            {    
                id:2,
                items: []
            },
            {    
                id:3,
                items: []
            },
            {    
                id:4,
                items: []
            },
        ];
    }

    return JSON.parse(json);
}

function save(data) {
    localStorage.setItem("Kanban-data",JSON.stringify(data));
}


