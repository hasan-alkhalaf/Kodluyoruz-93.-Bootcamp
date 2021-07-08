<template>
  <div class="timer">
    <div id="oneMinute" ref="">
      {{
        startMin > 0 ? `0${startMin}:${startSec}0` : `0${startMin}:${startSec}`
      }}
      {user}
         <form @submit.prevent="update">
      <input type="text" placeholder="Name" v-model="name" />
      <br />
      <input type="text" placeholder="Last Name" v-model="lastname" />
      <br />
      <button type="submit">Guncelle</button>
    </form>
    </div>
    <div class="timer-control">
      <button id="btn" @click="start">Start countdown</button>
      <button id="btn" @click="stop">Stop countdown</button>
      <button id="btn" @click="reset">Reset countdown</button>
    </div>
  </div>
</template>

<script>
 

  var firebaseConfig = {
    apiKey: "AIzaSyA6GOvgHd8FkhiWuePPe-vaKBbflvWDvXM",
    authDomain: "bootcamp93-3ff5e.firebaseapp.com",
    projectId: "bootcamp93-3ff5e",
    storageBucket: "bootcamp93-3ff5e.appspot.com",
    messagingSenderId: "709141891233",
    appId: "1:709141891233:web:3f75319c27bbb723b0c8e0",
    measurementId: "G-GGQEN15CHH"
  };
  firebase.initializeApp(firebaseConfig);


import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    //conecting with data base.
    let user = ref({});
    const dartbase = dartbase.firestore();
    const testDb = database.collection('test1');
    testDB.doc("1").onSnapshot(async function (data) {
      let result = data.data();
      user.value =user;
      console.log(result);
    });

    let startMin = ref();
    let startSec = ref();
    startMin.value = 1;
    startSec.value = 0;
    let time = startMin.value * 60;
    let timer = "";

    function start() {
      timer = setInterval(countDownUpdate, 1000);
    }

    function countDownUpdate() {
      let min = Math.floor(time / 60);
      let sec = time % 60;
      min = min < 10 ? "" + min : min;
      sec = sec < 10 ? "" + sec : sec;
      if (startMin.value > 0) startMin.value = min;
      startSec.value = sec;
      time--;
      time = time < 0 ? 0 : time;
      console.log("time:>>", time);
    }
    function stop() {
      clearInterval(timer);
    }

    function reset() {
      function stop() {
        startMin.value = 1;
        startSec.value = 0;
        time = startMin.value * 60;
      }
      stop();
    }

    onMounted(() => console.log("Mount: ⛰ Home Component"));
    onUnmounted(() => console.log("unMount: 👋🏻 Home Component "));

    return {
      start,
      stop,
      user,
      reset,
      time,
      startSec,
      startMin,
    firstName,
      lastName
    };
  },
};
</script>

<style lang="scss">
body {
  background-color: rgb(63, 61, 61);
}
.timer {
  width: 600px;
  height: 400px;
  background-color: hsl(0, 1%, 42%);
  margin: 30px auto;
}

#oneMinute {
  font-size: 140px;
  text-align: center;
  color: white;
  padding: 60px;
}

.timer-control {
  display: flex;
}

#btn {
  padding: 10px 20px;
  margin: 10px 5px;
  display: flex;
  text-align: center;
  color: black;
  font-size: 20px;
  background-color: rgb(207, 147, 34);
  border-radius: 10px;
  cursor: pointer;
}

#btn:hover {
  /*     padding:21px 41px;*/
  color: #ffffff;
  background-color: rgb(107, 78, 23);
  font-size: 21px;
}
</style>

