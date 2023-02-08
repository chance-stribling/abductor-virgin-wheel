<script setup>
  import {ref} from "vue";
  // import dayjs from "dayjs";
  // dayjs.extend(relativeTime);

  const showModal = ref(false);
  const newNote = ref("");
  const notes = ref([]);

  // JS function to get a random color
  function getRandomColor(){
    return "hsl(" + Math.random() * 120 + ", 30%, 50%)"
  }

  const addNote= () => {
    // adding validation
    if(newNote.value.length <= 4 ){
      alert("You need to have more than 4 characters.");
      return;
    }
    notes.value.push({
      // this is a randomly generated number and would have to be fixed to ids that don't repeat, in the future
      id: Math.floor(Math.random() * 100000),
      text: newNote.value,
      date: new Date(),
      backgroundColor: getRandomColor()
    });
    showModal.value=false;
    newNote.value="";
  }
</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model.trim="newNote" @keyup.ctrl.enter.exact="addNote" name="note" id="note" cols="30" rows="10"></textarea>
        <button @click="addNote">Add Note</button>
        <button @click="showModal = false" class="close">Nevermind</button>
      </div>
    </div>
    
    <div class="container">
    
      <header>
        <h1>Schticky Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      
      <div class="cards-container">
        
        <div v-for="note in notes" :key="note.id" class="card" :style="{backgroundColor: note.backgroundColor}">
          <p >{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString("en-US") }} {{ note.date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) }}</p>
        </div>
      </div>
    
    </div>
  </main>
</template>

<style scoped>
  main{
    height: 100vh;
    width: 100vw;
    background-color: #141414;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;;

  }
  .container{
    max-width: 1000px;
    padding: 10px;;
    margin: 0 auto;
  }
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    padding-right: 10px;
    padding-left: 10px;
    /* background: linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    ); */
    background-color: rgb(230, 83, 78);
    border-radius: 10px;
    
    
  }
  h1{
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 70px;
    color: white;
    font-style: oblique;
  }
  header button{
    border: none;
    padding: 10px;
    height: 50px;
    width: 50px;
    cursor: pointer;
    background-color: whitesmoke;
    border-radius: 100%;
    color: black;
    font-size: 25px;
  }
  .card{
    width: 225px;
    height: 225px;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
    font-size: large;
    font-weight: bold;
    color: rgb(255, 255, 255);
  }
  .date{
    font-size: 12.5px;
    font-weight: bold;
  }
  .cards-container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 10px;
  }
  .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.77);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  .modal{
    width: 750px;
    background-color: whitesmoke;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #282828;
  }
  .modal button{
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: aquamarine;
    border: none;
    color: Black;
    cursor: pointer;
    margin-top: 15px;
  }
  .modal .close{
    background-color: red;
    margin-top: 7px;
    width: 50%;
    align-self: center;
  }
  .modal textarea{
    font-size: 15px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;;
    background-color: #515151;
    color: whitesmoke;
    border-color: aquamarine;
  }
</style>