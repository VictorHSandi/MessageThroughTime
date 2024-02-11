<template>
    <div class ="title">
        <h1>Welcome to Message through time</h1>
    </div>

    <div class="page info">
        <p>Add info here</p>
    </div>
    <div class="messagebox">
        <MessageInput v-model="messageValue" type="text" label="Encrypt"/>
    </div>
    <RectButton @click="sendMessage()" buttonText="Generate"/>
       
</template>

<script>
import MessageInput from "@/components/MessageInput.vue";
import RectButton from "@/components/RectButton.vue";
// import axios from "axios";

export default {
    name: "HomePageTest",
    components: {
        MessageInput,
        RectButton
    },
    data() {
        return {
            messageValue: "", //data to bind to input
        };
    },
    //get message and make a POST request using axios
    methods: {
        sendMessage() {
            if (this.messageValue == "") {
                console.log("ERROR!! Empty field");
            }
            console.log(this.messageValue);
            // axios({
            //     method: "post",
            //     url: "/", //TODO: find the url for axios
            //     data: {
            //         message: this.message,
            //     },
            // }).then((res) => {
            //     console.log(res);
            //     //TODO: make a message for success
            // }).catch((err) => {
            //     console.log(err);
            //     //failed message?
            // });
        },
    },
};
</script>

