<template>
    <div class ="title">
        <h1>Welcome to Message through time</h1>
    </div>

    <div class="page info">
        <p>Add info here</p>
    </div>
    <div class="messagebox">
        <MessageInput type="text" label="Encrypt"></MessageInput>
    </div>
    <!-- <RectButton :custom-click="function1()" buttonText="Generate"/> -->
       
</template>

<script>
import MessageInput from "@/components/MessageInput.vue";
// import axios from "axios";

export default {
    name: "HomePageTest",
    components: {
        MessageInput,
    },
    //get message and make a POST request using axios
    methods: {
        // sendMessage() {
        //     // if (this.messageValue == "") {
        //     //     console.log("ERROR!! Empty field");
        //     // }
        //     // else {
        //     //     console.log(this.messageValue);
        //     // }
            
        
        // },
        
    }   
};
</script>

