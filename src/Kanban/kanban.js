import Column from "./colunas.js";

export default class Kanban {
    constructor(root){
        this.root = root;

        Kanban.columns().forEach(column => {
            //todo:ccira uma classe de coluna instantaneo
            const columnView = new Column (column.id,column.title);

            this.root.appendChild(columnView.elements.root);
        });
    }

    static columns(){
        return [
            {
                id: 12, 
                title : "Não iniciadas"
            },
            {
                id: 13 ,
                title : "Em andamento"
            },
            {
                id: 14,
                title : "Atrasadas"
            },
            {
                id: 15,
                title : "Finalizadas"
            }
        ];
    }
}