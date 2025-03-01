<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { enhance } from '$app/forms';


    let showTime = $state(true);

    function swapShowTime() {
        showTime = !showTime;
    }
</script>

<svelte:head>
    <title>Time Capsule</title>
</svelte:head>

<div class="body">
    <div class="container">
        <h1>🔒 Classified: Time Capsule (Open at Your Own Risk)</h1>

        <p>They said it was lost... but you've found it. Leave a message for the distant future—or the next poor soul who stumbles upon it.</p>

        <form method="post" action="?/postDetails">
            <label for="message">Secret Message (Keep it cryptic):</label>
            <textarea id="message" name="message" rows="4" placeholder="To whoever finds this..."></textarea>

            <label for="image">Attach Evidence (Image Upload):</label>
            <div class="file-upload">
                <input type="file" id="image" name="image" accept="image/*" />
                <span class="file-label">Choose a File...</span>
            </div>

            <label for="email">Return Address (Optional, for the future to contact you):</label>
            <input id="email" name="email" type="text" placeholder="Anonymity recommended..." />

            {#if showTime}
                <label for="time">Specify Unlock Date (or not...)</label>
                <input id="time" name="time" type="date" />
            {/if}

            <label for="randomTime">Entrust to Fate (Random Unlock Time)?</label>
            <input id="randomTime" name="randomTime" type="checkbox" onclick={swapShowTime} />

            <button type="submit">Launch into Space</button>
        </form>
    </div>
</div>

<style>
    :global(body) {
        font-family: 'Courier New', Courier, monospace;
        margin: 0;
        padding: 0;
    }

    .body {
        background-color: #0d0d0d;
        color: #00ff41;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        box-sizing: border-box;
        overflow: hidden;
    }

    .container {
        max-width: 600px;
        width: 100%;
        padding: 2rem;
        background: #1a1a1a;
        border: 2px solid #00ff41;
        border-radius: 12px;
        box-shadow: 0 0 20px #00ff41;
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    h1 {
        color: #ff0040;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        color: #00ff41;
        margin-bottom: 2rem;
        line-height: 1.6;
    }

    label {
        display: block;
        margin: 1rem 0 0.5rem;
        font-weight: bold;
    }

    textarea,
    input[type='text'],
    input[type='date'] {
        width: 100%;
        padding: 0.8rem;
        margin-bottom: 1rem;
        background: #0d0d0d;
        color: #00ff41;
        border: 1px solid #00ff41;
        border-radius: 8px;
        box-sizing: border-box;
    }

    .file-upload {
        position: relative;
        overflow: hidden;
        display: inline-block;
        width: 100%;
    }

    .file-upload input[type='file'] {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    .file-label {
        display: block;
        padding: 0.8rem;
        background: #0d0d0d;
        color: #00ff41;
        border: 1px solid #00ff41;
        border-radius: 8px;
        text-align: center;
    }

    button {
        background-color: #ff0040;
        color: #00ff41;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s;
    }

    button:hover {
        background-color: #99002e;
    }

    form {
        margin-bottom: 2rem;
    }
</style>