<template>
    <div>
        <p>
            This is the home page!!
        </p>
        <div class="messageinput">
            <MessageInput v-model="inputValue" type="text" label="Encrypt Message" />
        </div>
       
    </div>
</template>

<script>
import MessageInput from "@/components/MessageInput.vue";

export default {
    name: "HomePage",
    components: {
        MessageInput
    },
    data() {
        return {
            inputValue: "" //data to bind to input
        }
    }
};
</script>

<template>
    <div class ="title">
        <h1>Welcome to Message through time</h1>
    </div>

    <div class="page info">
        <p>Add info here</p>
    </div>
</template>

<script>
export default {
    name: "HomePage",
};
</script>