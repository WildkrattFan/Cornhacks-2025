<script>
    import { onMount } from 'svelte';

    let index = 0; // Define the index variable
    /** @type {{ x: number, y: number, color: string, size: number, speed: number }[]} */
    let planets = [];

    // Random position generator for planets
    function randomPosition() {
        return {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        };
    }

    onMount(() => {
        // Array of planets with random positions and colors
        planets = Array.from({ length: 5 }, () => ({
            ...randomPosition(),
            color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            size: Math.random() * 40 + 20,
            speed: Math.random() * 10 + 5
        }));
    });
</script>

<svelte:head>
    <title>Launching into space!</title>
</svelte:head>
<div class = "body">
<div class = "back-bttn">
    <a href = "/">Back</a>
    </div>

<div class="launch-container" style="animation-delay: {index * 0.5}s;">
    <div class="rocket">
        <div class="flames"></div>
    </div>
</div>

{#each planets as planet}
    <div class="planet"
        style="top: {planet.y}px; left: {planet.x}px; background-color: {planet.color}; width: {planet.size}px; height: {planet.size}px; animation-duration: {planet.speed}s;">
    </div>
{/each}
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
    }

    .launch-container {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /* Rocket styling */
    .rocket {
        width: 50px;
        height: 100px;
        background: red;
        border-radius: 25px 25px 0 0;
        position: relative;
        animation: launch 3s ease-in-out forwards;
    }

    /* Flames */
    .flames {
        position: absolute;
        bottom: -20px;
        left: 50%;
        width: 20px;
        height: 40px;
        background: orange;
        border-radius: 50%;
        transform: translateX(-50%);
        animation:
            flicker 0.1s infinite alternate,
            expandFlame 1s infinite alternate;
    }

    /* Planet styling */
    .planet {
        position: absolute;
        border-radius: 50%;
        animation: orbit linear infinite;
    }

    /* Launch animation */
    @keyframes launch {
        0% {
            transform: translateY(0);
        }

        99% {
            transform: translateY(-100vh);
        }

        100% {
            display: none;
        }
    }

    /* Planet orbit animation */
    @keyframes orbit {
        0% {
            transform: rotate(0deg) translateX(100px) rotate(0deg);
        }

        100% {
            transform: rotate(360deg) translateX(100px) rotate(-360deg);
        }
    }

    /* Flame flickering effect */
    @keyframes flicker {
        0% {
            background: orange;
        }

        100% {
            background: yellow;
        }
    }

    /* Flames expanding */
    @keyframes expandFlame {
        0% {
            height: 40px;
        }

        100% {
            height: 60px;
        }
    }
    .back-bttn{
        position: absolute;
        top: 5;
        left: 5;
        padding: 5px;
        border-radius: 5px;
        background-color: blue;
        color: white;
        text-decoration: none;
    }
    a{
        text-decoration: none;
        color: white;
    }
</style>
