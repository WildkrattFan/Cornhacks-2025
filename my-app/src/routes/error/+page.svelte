<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<div class = "body">
    <h3>An error occured during launch!</h3>
    <a href="/">Home</a>
</div>

<style>
    :global(body) {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        background-color: black;
        overflow-x: hidden;
        overflow-y: hidden;

    }
    .body{
        background-color: black;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        color: white;
        flex-direction: column;
    }
    a{
        color: white;
        text-decoration: none;
        font-size: 20px;
    }
    a:hover{
        color: red;
    }
</style>