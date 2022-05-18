export default class Column {
    constructor(id,title) {
        //representa uma única coluna na interface
        this.elements = {};
        this.elements.root = Column.createRoot();
        this.elements.title = this.elements.root.querySelector(".kanban__column-title");
        this.elements.items = this.elements.root.querySelector(".kanban__column-items");
        this.elements.addItem = this.elements.root.querySelector(".kanban__add-item");
        // this.elements.container = this.elements.root.querySelector(".kanban__timer-container");

        this.elements.root.dataset.id = id;
        this.elements.root.dataset.textContent = title;
    }

    static createRoot() {
        const range = document.createRange();

        range.selectNode(document.body);

        return range.createContextualFragment(`
            <div class="kanban__column">
                <div class="kanban__column-title"></div>
                <div class="kanban__column-items"></div>
                <button class="kanban__add-item" type="button"> + Adicionar </button>    
            </div>
        `).children[0];
    }
}