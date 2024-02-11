<!-- reuseable input form -->
<template>
    <div class="container">
        <div class="label">
            <label :for="inputId">{{ label }}</label>
        </div>
        <div class="box">
            <div class="input">
            <textarea :id="inputId" :type="type" :label="label" :name="name"
                @input="handleInput" />
            </div>  
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'MessageInput',
    props: {
        value: String, //input value
        type: {
            type: String,
            default: "text"
        },
        label: String //label for input
    },
    //input types
    data() {
        return {
            inputId: `custom-input-${Math.random().toString(36).substr(2, 10)}`,
            message: "",
            maxCharacters: 68
        };
    },
    methods: {
        handleInput(event) {
            this.$emit("input", event.target.value);
        },
        checkCharacterLimit() {
            if (this.message.length > this.maxCharacters) {
                this.message = this.message.substr(0, this.maxCharacters);
            }
        },
    }
};
</script>

<style scoped>
.container {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   
}
.label {
    justify-content: left;
}
/* container for the terminal */
.box {
    
    border: 1px solid #333;
    border-radius: 5px;
    padding: 10px;
    background-color: #000;
    color: #fff;
    width: 400px;
    max-width: 100%;
}
/* text of the terminal */
.input textarea {
    text-align: left;
    font-size: 20px;
    background: transparent;
    border: none;
    outline: none;
    color: #01bd01;
    font-family: monospace;
    width: calc(100% - 25px);
    height: 30vh;
}
</style>
