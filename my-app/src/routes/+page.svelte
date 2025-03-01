<body>
    <div class="container">
        <h1>Time Capsule to 2100 (or in 10 seconds)</h1>

        <p>Time Capsule is a simple app that allows you to send messages to your future self!</p>

        <form>
            <label for="message">Write a message to your future self:</label>
            <textarea id="message" name="message" rows="4" placeholder="Dear future me..."></textarea>


            <label for="image">Upload an image to your future self:</label>
            <input type="file" id="image" name="image" accept="image/*">

            <label for="email">What email would you like a reminder at?</label>
            <input id="email" name="email" type = "text" placeholder="Send Me reminders at">
            <button type="submit">Post</button>
        </form>



    </div>
</body>
<style>
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #89f7fe, #66a6ff);
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    box-sizing: border-box;
}

.container {
    max-width: 600px;
    width: 100%;
    padding: 2rem;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    color: #444;
    font-size: 2rem;
    margin-bottom: 1rem;
}

p {
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
}

label {
    display: block;
    margin: 1rem 0 0.5rem;
    font-weight: bold;
}

textarea, input[type="file"] {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box;
}

button {
    background-color: #66a6ff;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
}

button:hover {
    background-color: #4d89e6;
}

form {
    margin-bottom: 2rem;
}
input {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-sizing: border-box;
}
</style>