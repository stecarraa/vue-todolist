/**
 * Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
E' tassativamente obbligatorio rispettare le milestone nell'ordine in cui sono elencate e fare almeno una commit per ogni milestone: pena la valutazione dell'esercizio.
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
 */

const app = new Vue({
  el: "#root",
  data: {
    todos: [
      {
        text: "Fare i compiti",
        done: false,
      },
      {
        text: "Fare la spesa",
        done: true,
      },
      {
        text: "Pulire casa",
        done: false,
      },
      {
        text: "Lavare la macchina",
        done: false,
      },
      {
        text: "Fare benzina",
        done: true,
      },
      {
        text: "Bere tanta acqua",
        done: false,
      },
    ],
    done:true,
    newToDo: "",
  },

  methods: {
    removeToDo(index) {
      this.todos.splice(index, 1);
    },

    addToList: function () {
      this.todos.push({ text: this.newToDo, done: false });
      // if (element === "") {
      //   console.log("stai provando a inserire un elemento vuoto");
      // } else {
      //   const addToDo = {
      //     text: this.newToDo.push(element),
      //     done: false,
      //   };
      this.newToDo = "";
    },

    line: function (index){
      this.todos[index].done=!this.todos[index].done;
      console.log(index)
  }
  },

  
});
